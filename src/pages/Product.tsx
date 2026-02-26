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

const features = [
  { title: "One-Click Deploy", desc: "Upload your project or import from GitHub and deploy instantly — no DevOps required." },
  { title: "Auto Stack Detection", desc: "Automatically detects your tech stack and chooses the optimal deployment strategy." },
  { title: "Multi-Cloud Support", desc: "Deploy to AWS, GCP, or Azure using secure OAuth — one platform, any cloud." },
  { title: "Real-Time Observability", desc: "Built-in monitoring, live logs, performance metrics, and intelligent alerting." },
  { title: "Auto-Scaling & Self-Healing", desc: "Infrastructure that scales on demand and recovers automatically from failures." },
  { title: "AI Model Deployment", desc: "Deploy trained AI/ML models to production with zero infrastructure knowledge." },
];

const targetUsers = [
  { label: "Students & Beginners", icon: "📚" },
  { label: "Indie Developers", icon: "⚡" },
  { label: "AI/ML Builders", icon: "🧠" },
  { label: "Startups & Small Teams", icon: "🚀" },
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
        <main>
          {/* Hero */}
          <section className="relative flex min-h-screen items-center overflow-hidden">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/[0.07] blur-[120px]" />
              <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[100px]" />
            </div>

            <div className="container-narrow relative z-10 pt-32 pb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Coming Soon
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-8 text-5xl font-medium tracking-tight leading-[1.1] md:text-6xl lg:text-7xl"
              >
                Cloudsnap Studio
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
              >
                An AI-powered cloud deployment platform that eliminates infrastructure complexity.
                Upload your project, connect your cloud, and deploy — with one click.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="mt-4 text-base text-muted-foreground/60"
              >
                No DevOps expertise required. Production-grade from day one.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10"
              >
                {submitted ? (
                  <div className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-6 py-3">
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
              </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-8 w-px bg-gradient-to-b from-muted-foreground/50 to-transparent"
              />
            </motion.div>
          </section>

          {/* Problem */}
          <AnimatedSection className="section-spacing">
            <div className="container-narrow">
              <div className="divider-subtle mb-20" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">The Problem</span>
              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                Cloud is powerful — but painful.
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {[
                  "Steep learning curve for AWS, Azure, and GCP",
                  "Manual CI/CD pipeline configuration",
                  "Confusion in choosing the right cloud",
                  "Security misconfigurations and blind spots",
                  "No built-in observability or alerting",
                  "AI models built but never deployed",
                ].map((problem, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/50 p-4"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/70" />
                    <p className="text-sm text-muted-foreground">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Features */}
          <AnimatedSection className="section-spacing">
            <div className="container-narrow">
              <div className="divider-subtle mb-20" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">Capabilities</span>
              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                Everything you need to ship.
              </h2>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group rounded-xl border border-border/50 bg-card/50 p-6 transition-colors hover:border-primary/30 hover:bg-card"
                  >
                    <h3 className="text-base font-medium text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* How It Works */}
          <AnimatedSection className="section-spacing">
            <div className="container-narrow">
              <div className="divider-subtle mb-20" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">How It Works</span>
              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                Three steps. Zero complexity.
              </h2>
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                {[
                  { step: "01", title: "Upload or Import", desc: "Upload your project files or connect your GitHub repository." },
                  { step: "02", title: "Connect Your Cloud", desc: "Authenticate with AWS, GCP, or Azure using secure OAuth." },
                  { step: "03", title: "Deploy", desc: "One click. Auto stack detection, security, monitoring — all handled." },
                ].map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="relative"
                  >
                    <span className="text-5xl font-medium text-primary/15">{item.step}</span>
                    <h3 className="mt-2 text-lg font-medium text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Target Users */}
          <AnimatedSection className="section-spacing">
            <div className="container-narrow">
              <div className="divider-subtle mb-20" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">Built For</span>
              <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
                From students to startups.
              </h2>
              <div className="mt-12 flex flex-wrap gap-4">
                {targetUsers.map((user, i) => (
                  <motion.div
                    key={user.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 rounded-full border border-border/50 bg-card/50 px-6 py-3"
                  >
                    <span className="text-lg">{user.icon}</span>
                    <span className="text-sm font-medium text-foreground">{user.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Vision */}
          <AnimatedSection className="section-spacing">
            <div className="container-narrow">
              <div className="divider-subtle mb-20" />
              <span className="text-sm uppercase tracking-widest text-muted-foreground">Vision</span>
              <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-tight md:text-4xl">
                An autonomous cloud operating system that abstracts complexity entirely.
              </h2>
              <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
                Cloudsnap Studio isn't just a deployment tool. It's the beginning of a future where
                anyone — regardless of their infrastructure knowledge — can take an idea to production
                with confidence, security, and reliability built in from the start.
              </p>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection className="section-spacing">
            <div className="container-narrow text-center">
              <div className="divider-subtle mb-20" />
              <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
                Be the first to deploy.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Join the waitlist and get early access when Cloudsnap Studio launches.
              </p>
              <div className="mt-8">
                {submitted ? (
                  <div className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-6 py-3">
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
          </AnimatedSection>
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
