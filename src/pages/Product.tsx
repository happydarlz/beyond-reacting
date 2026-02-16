import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";
import PageTransition from "../components/ui/PageTransition";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Product = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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
      toast({ title: "Thank you!", description: "We'll be in touch soon." });
    }
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
                Product
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-4 text-4xl font-medium tracking-tight md:text-5xl"
              >
                AI Model One-Click Deployment & Observability Platform
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Coming Soon
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-12 max-w-3xl"
              >
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Deploy your trained AI models to production with a single click. Our platform 
                  abstracts away cloud complexity—automatically provisioning infrastructure, networking, 
                  security, logging, and monitoring—so you can focus on model innovation.
                </p>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                  {[
                    { title: "One-Click Deploy", desc: "Upload your model, select minimal config, and deploy instantly." },
                    { title: "BYOC Support", desc: "Bring Your Own Cloud—deploy directly into your AWS, GCP, or Azure account." },
                    { title: "Real-Time Observability", desc: "Live log visualization, performance metrics, and alerting built in." },
                    { title: "Auto-Scaling & Healing", desc: "Automatic scaling based on traffic with self-healing capabilities." },
                  ].map((feature, i) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                      className="rounded-xl border border-border bg-card p-6"
                    >
                      <h3 className="text-lg font-medium text-foreground">{feature.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="divider-subtle my-20" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-lg"
              >
                <h2 className="text-2xl font-medium text-foreground">
                  Interested in this product?
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Join the waitlist and be the first to know when we launch.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
                    <p className="text-lg font-medium text-foreground">Thank you for your interest!</p>
                    <p className="mt-2 text-muted-foreground">We'll reach out as soon as the platform is ready.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div>
                      <label className="mb-1.5 block text-sm text-muted-foreground">Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Your name"
                        required
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm text-muted-foreground">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="you@example.com"
                        required
                        maxLength={255}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm text-muted-foreground">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Your phone number"
                        maxLength={20}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm text-muted-foreground">Company</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Your company"
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm text-muted-foreground">Message</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Tell us about your use case..."
                        maxLength={1000}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-outline-premium w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "I'm Interested — Join Waitlist"}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Product;
