import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnimatedSection from "../components/ui/AnimatedSection";
import PageTransition from "../components/ui/PageTransition";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      message: form.message.trim(),
    });
    setLoading(false);
    if (error) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } else {
      setSubmitted(true);
      toast({ title: "Message sent!", description: "We'll get back to you soon." });
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
              <div className="mx-auto max-w-xl text-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-sm uppercase tracking-widest text-muted-foreground"
                >
                  Contact
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="mt-4 text-4xl font-medium tracking-tight md:text-5xl"
                >
                  Get in touch
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-6 text-lg leading-relaxed text-muted-foreground"
                >
                  We're always open to thoughtful conversations about our work, philosophy, or collaboration.
                </motion.p>
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mx-auto mt-12 flex max-w-lg flex-wrap items-center justify-center gap-8"
              >
                <a
                  href="mailto:finitix.official@gmail.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  finitix.official@gmail.com
                </a>
                <span className="hidden h-4 w-px bg-border sm:block" />
                <a
                  href="https://wa.me/917815879588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  +91 7815879588 (WhatsApp)
                </a>
              </motion.div>

              {/* Centered Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto mt-16 max-w-md"
              >
                {submitted ? (
                  <div className="rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
                    <p className="text-lg font-medium text-foreground">Thank you!</p>
                    <p className="mt-2 text-muted-foreground">Your message has been sent successfully.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="mb-1.5 block text-sm text-muted-foreground">Name *</label>
                      <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your name" required maxLength={100} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm text-muted-foreground">Email *</label>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="you@example.com" required maxLength={255} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm text-muted-foreground">Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="Your phone number" maxLength={20} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm text-muted-foreground">Message *</label>
                      <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Tell us what's on your mind..." required maxLength={1000} />
                    </div>
                    <button type="submit" disabled={loading} className="btn-outline-premium w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50">
                      {loading ? "Sending..." : "Send Message"}
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

export default Contact;
