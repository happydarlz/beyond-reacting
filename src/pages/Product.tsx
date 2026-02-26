import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
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

const features = [
  { title: "One-Click Deploy", desc: "Upload or import from GitHub and deploy instantly." },
  { title: "Auto Stack Detection", desc: "Detects your tech stack and picks the optimal strategy." },
  { title: "Multi-Cloud Support", desc: "Deploy to AWS, GCP, or Azure via secure OAuth." },
  { title: "Real-Time Observability", desc: "Live logs, metrics, and intelligent alerting." },
  { title: "Auto-Scaling", desc: "Scales on demand and self-heals from failures." },
  { title: "AI Model Deployment", desc: "Deploy AI/ML models with zero infra knowledge." },
];

const steps = [
  { step: "01", title: "Upload or Import", desc: "Upload files or connect GitHub." },
  { step: "02", title: "Connect Cloud", desc: "Auth with AWS, GCP, or Azure." },
  { step: "03", title: "Deploy", desc: "One click — everything handled." },
];

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
        <main className="pt-32 pb-20">
          <div className="container-narrow">
            {/* Product Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full overflow-hidden rounded-2xl border border-border/60 bg-card/80 backdrop-blur-sm"
            >
              {/* Ambient glow inside card */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[300px] w-[400px] rounded-full bg-primary/[0.06] blur-[100px]" />
                <div className="absolute bottom-0 right-0 h-[200px] w-[200px] rounded-full bg-primary/[0.04] blur-[80px]" />
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="border-b border-border/40 p-8 md:p-10">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-4">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        Coming Soon
                      </span>
                      <h1 className="text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
                        Cloudsnap Studio
                      </h1>
                      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                        An AI-powered cloud deployment platform that eliminates infrastructure complexity.
                        Upload your project, connect your cloud, and deploy — with one click.
                      </p>
                    </div>
                    <div className="shrink-0">
                      {submitted ? (
                        <div className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-5 py-2.5">
                          <span className="text-sm font-medium text-foreground">🎉 You're on the list!</span>
                        </div>
                      ) : (
                        <button
                          onClick={() => setOpen(true)}
                          className="btn-outline-premium border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          Join the Waitlist →
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Problem + How it works row */}
                <div className="grid border-b border-border/40 md:grid-cols-2">
                  {/* Problems */}
                  <div className="border-b border-border/40 p-8 md:border-b-0 md:border-r md:p-10">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">The Problem</span>
                    <h2 className="mt-2 text-lg font-medium tracking-tight md:text-xl">
                      Cloud is powerful — but painful.
                    </h2>
                    <div className="mt-5 space-y-2.5">
                      {[
                        "Steep learning curve for AWS, Azure, GCP",
                        "Manual CI/CD pipeline configuration",
                        "Security misconfigurations & blind spots",
                        "AI models built but never deployed",
                      ].map((problem, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/70" />
                          <p className="text-sm text-muted-foreground">{problem}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* How it works */}
                  <div className="p-8 md:p-10">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">How It Works</span>
                    <h2 className="mt-2 text-lg font-medium tracking-tight md:text-xl">
                      Three steps. Zero complexity.
                    </h2>
                    <div className="mt-5 space-y-4">
                      {steps.map((item) => (
                        <div key={item.step} className="flex items-start gap-4">
                          <span className="text-2xl font-medium text-primary/20 leading-none">{item.step}</span>
                          <div>
                            <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features grid */}
                <div className="p-8 md:p-10">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">Capabilities</span>
                  <h2 className="mt-2 text-lg font-medium tracking-tight md:text-xl">
                    Everything you need to ship.
                  </h2>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, i) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="rounded-xl border border-border/40 bg-background/50 p-5 transition-colors hover:border-primary/30 hover:bg-background/80"
                      >
                        <h3 className="text-sm font-medium text-foreground">{feature.title}</h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer bar */}
                <div className="flex items-center justify-between border-t border-border/40 bg-muted/30 px-8 py-5 md:px-10">
                  <div className="flex flex-wrap gap-3">
                    {["📚 Students", "⚡ Indie Devs", "🧠 AI Builders", "🚀 Startups"].map((label) => (
                      <span key={label} className="text-xs text-muted-foreground">{label}</span>
                    ))}
                  </div>
                  <p className="hidden text-xs text-muted-foreground/60 md:block">
                    No DevOps expertise required.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
        <Footer />

        {/* Waitlist Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Join the Waitlist</DialogTitle>
              <DialogDescription>
                Be the first to know when Cloudsnap Studio launches.
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
