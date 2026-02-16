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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12 max-w-2xl"
              >
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Whether you're interested in our work, our philosophy, or future
                  collaboration, we're always open to thoughtful conversations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-16"
              >
                <div className="grid gap-12 md:grid-cols-3">
                  <div>
                    <h2 className="text-sm uppercase tracking-widest text-muted-foreground">
                      Email
                    </h2>
                    <a
                      href="mailto:finitix.official@gmail.com"
                      className="mt-3 block text-lg text-foreground transition-colors hover:text-primary"
                    >
                      finitix.official@gmail.com
                    </a>
                  </div>

                  <div>
                    <h2 className="text-sm uppercase tracking-widest text-muted-foreground">
                      WhatsApp
                    </h2>
                    <a
                      href="https://wa.me/917815879588"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 block text-lg text-foreground transition-colors hover:text-primary"
                    >
                      +91 7815879588
                    </a>
                  </div>

                  <div>
                    <h2 className="text-sm uppercase tracking-widest text-muted-foreground">
                      Location
                    </h2>
                    <p className="mt-3 text-lg text-foreground">
                      Remote-first
                    </p>
                  </div>
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
                <h2 className="text-2xl font-medium text-foreground">Send us a message</h2>
                <p className="mt-3 text-muted-foreground">We'll get back to you as soon as possible.</p>

                {submitted ? (
                  <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
                    <p className="text-lg font-medium text-foreground">Thank you!</p>
                    <p className="mt-2 text-muted-foreground">Your message has been sent successfully.</p>
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
                      <label className="mb-1.5 block text-sm text-muted-foreground">Message *</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Tell us what's on your mind..."
                        required
                        maxLength={1000}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-outline-premium w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
                    >
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
