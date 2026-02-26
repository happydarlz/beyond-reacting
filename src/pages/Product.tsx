import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";
import PageTransition from "../components/ui/PageTransition";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Product = {
  id: string;
  title: string;
  description: string;
  features: { title: string; desc: string }[];
  status: string;
  sort_order: number;
};

const Product = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState<Record<string, boolean>>({});
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await supabase
        .from("products" as any)
        .select("*")
        .order("sort_order", { ascending: true });
      if (data) setProducts(data as unknown as Product[]);
      setFetching(false);
    };
    fetchProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("product_interests").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      company: form.company.trim() || null,
      message: form.message.trim() ? `[${selectedProduct}] ${form.message.trim()}` : `[${selectedProduct}]`,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } else {
      setSubmitted((prev) => ({ ...prev, [selectedProduct!]: true }));
      setOpen(false);
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
      toast({ title: "Thank you!", description: "We'll be in touch soon." });
    }
  };

  const openWaitlist = (productTitle: string) => {
    setSelectedProduct(productTitle);
    setOpen(true);
  };

  const inputClass =
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  const statusBadge = (status: string) => {
    const map: Record<string, { label: string; color: string }> = {
      coming_soon: { label: "Coming Soon", color: "border-primary/30 bg-primary/10 text-primary" },
      beta: { label: "Beta", color: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400" },
      live: { label: "Live", color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" },
      in_development: { label: "In Development", color: "border-violet-500/30 bg-violet-500/10 text-violet-400" },
    };
    const s = map[status] || map.coming_soon;
    return (
      <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${s.color}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
        {s.label}
      </span>
    );
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-32">
          <AnimatedSection className="section-spacing">
            <div className="container-narrow">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-sm uppercase tracking-widest text-muted-foreground"
              >
                Products
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-4 text-4xl font-medium tracking-tight md:text-5xl"
              >
                What we're building
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
              >
                Thoughtful tools for modern engineering teams. Explore our products below.
              </motion.p>

              {fetching ? (
                <div className="mt-16 grid gap-8 md:grid-cols-2">
                  {[1, 2].map((i) => (
                    <div key={i} className="rounded-2xl border border-border bg-card p-8 animate-pulse">
                      <div className="h-6 w-24 rounded bg-muted" />
                      <div className="mt-5 h-8 w-3/4 rounded bg-muted" />
                      <div className="mt-4 h-20 rounded bg-muted" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-16 grid gap-8 md:grid-cols-2">
                  {products.map((product, i) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                    >
                      <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/20">
                        {statusBadge(product.status)}

                        <h2 className="mt-5 text-2xl font-medium tracking-tight text-foreground">
                          {product.title}
                        </h2>

                        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {product.description}
                        </p>

                        {product.features && product.features.length > 0 && (
                          <div className="mt-6 grid gap-2 sm:grid-cols-2">
                            {product.features.slice(0, 4).map((f) => (
                              <div key={f.title} className="rounded-lg border border-border/50 bg-background/50 p-3">
                                <h3 className="text-xs font-medium text-foreground">{f.title}</h3>
                                <p className="mt-0.5 text-[11px] text-muted-foreground">{f.desc}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="mt-6">
                          {submitted[product.title] ? (
                            <div className="rounded-lg border border-primary/30 bg-primary/5 p-3 text-center">
                              <p className="text-sm font-medium text-foreground">🎉 You're on the list!</p>
                            </div>
                          ) : (
                            <button
                              onClick={() => openWaitlist(product.title)}
                              className="btn-outline-premium w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs"
                            >
                              Join Waitlist →
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>
        </main>
        <Footer />

        {/* Waitlist Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Join the Waitlist</DialogTitle>
              <DialogDescription>
                Be the first to know when {selectedProduct} launches.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <label className="mb-1 block text-sm text-muted-foreground">Name *</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" required maxLength={100} />
              </div>
              <div>
                <label className="mb-1 block text-sm text-muted-foreground">Email *</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="you@example.com" required maxLength={255} />
              </div>
              <div>
                <label className="mb-1 block text-sm text-muted-foreground">Phone</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="Your phone number" maxLength={20} />
              </div>
              <div>
                <label className="mb-1 block text-sm text-muted-foreground">Company</label>
                <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} placeholder="Your company" maxLength={100} />
              </div>
              <div>
                <label className="mb-1 block text-sm text-muted-foreground">Message</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Tell us about your use case..." maxLength={1000} />
              </div>
              <button type="submit" disabled={loading} className="btn-outline-premium w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50">
                {loading ? "Submitting..." : "Join Waitlist"}
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </PageTransition>
  );
};

export default Product;
