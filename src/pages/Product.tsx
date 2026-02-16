import { motion } from "framer-motion";
import { useState } from "react";
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

const Product = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

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
      message: form.message.trim() || null,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } else {
      setSubmitted(true);
      setOpen(false);
      toast({ title: "Thank you!", description: "We'll be in touch soon." });
    }
  };

  const inputClass =
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

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
                Thoughtful tools for modern engineering teams. More products coming soon.
              </motion.p>

              {/* Single Product Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-16 max-w-2xl"
              >
                <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                      Coming Soon
                    </span>
                  </div>

                  <h2 className="mt-5 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                    AI Model One-Click Deployment & Observability Platform
                  </h2>

                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Deploy your trained AI models to production with a single click. Our platform
                    abstracts away cloud complexity—automatically provisioning infrastructure, networking,
                    security, logging, and monitoring—so you can focus on model innovation.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      { title: "One-Click Deploy", desc: "Upload your model, select minimal config, and deploy instantly." },
                      { title: "BYOC Support", desc: "Deploy directly into your AWS, GCP, or Azure account." },
                      { title: "Real-Time Observability", desc: "Live logs, performance metrics, and alerting built in." },
                      { title: "Auto-Scaling & Healing", desc: "Automatic scaling with self-healing capabilities." },
                    ].map((feature) => (
                      <div key={feature.title} className="rounded-lg border border-border/50 bg-background/50 p-4">
                        <h3 className="text-sm font-medium text-foreground">{feature.title}</h3>
                        <p className="mt-1 text-xs text-muted-foreground">{feature.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    {submitted ? (
                      <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-center">
                        <p className="text-sm font-medium text-foreground">🎉 You're on the list!</p>
                        <p className="mt-1 text-xs text-muted-foreground">We'll reach out when it's ready.</p>
                      </div>
                    ) : (
                      <button
                        onClick={() => setOpen(true)}
                        className="btn-outline-premium border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        Interested in this product? →
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </main>
        <Footer />

        {/* Product Interest Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Join the Waitlist</DialogTitle>
              <DialogDescription>
                Be the first to know when our AI deployment platform launches.
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
                {loading ? "Submitting..." : "I'm Interested — Join Waitlist"}
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </PageTransition>
  );
};

export default Product;
