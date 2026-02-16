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

const Careers = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", position: "", experience: "", cover_letter: "",
  });

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast({ title: "Only PDF files are allowed", variant: "destructive" });
        e.target.value = "";
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast({ title: "File size must be under 5MB", variant: "destructive" });
        e.target.value = "";
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast({ title: "Please fill in required fields", variant: "destructive" });
      return;
    }
    setLoading(true);

    let resume_url: string | null = null;

    if (resumeFile) {
      const fileName = `${Date.now()}_${resumeFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(fileName, resumeFile, { contentType: "application/pdf" });
      if (uploadError) {
        setLoading(false);
        toast({ title: "Failed to upload resume", description: uploadError.message, variant: "destructive" });
        return;
      }
      resume_url = fileName;
    }

    const { error } = await supabase.from("career_applications").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      position: form.position.trim() || null,
      experience: form.experience.trim() || null,
      cover_letter: form.cover_letter.trim() || null,
      resume_url,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } else {
      setSubmitted(true);
      setOpen(false);
      toast({ title: "Application submitted!", description: "We'll review it and get back to you." });
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
                Careers
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-4 text-4xl font-medium tracking-tight md:text-5xl"
              >
                Join a startup that cares
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-12 max-w-2xl space-y-6"
              >
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Finitix is an early-stage startup building thoughtful technology solutions.
                  We're small, ambitious, and deeply committed to quality over quantity.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  As a startup, every team member shapes the direction of the company. You won't
                  be a cog in a machine—you'll be a co-builder of something meaningful from the ground up.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We value ownership, curiosity, and the drive to build things that matter.
                  If that resonates with you, we'd love to hear from you.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="mt-16 grid gap-6 md:grid-cols-3"
              >
                {[
                  { title: "Early Impact", desc: "Your work directly shapes the product and company culture." },
                  { title: "Remote-First", desc: "Work from anywhere. We believe in flexibility and trust." },
                  { title: "Growth", desc: "Learn fast, take ownership, and grow with the company." },
                ].map((perk) => (
                  <div key={perk.title} className="rounded-xl border border-border bg-card p-6">
                    <h3 className="text-lg font-medium text-foreground">{perk.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{perk.desc}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-16"
              >
                {submitted ? (
                  <div className="max-w-md rounded-xl border border-primary/30 bg-primary/5 p-8 text-center">
                    <p className="text-lg font-medium text-foreground">🎉 Application received!</p>
                    <p className="mt-2 text-muted-foreground">We'll review your application and get back to you soon.</p>
                  </div>
                ) : (
                  <button
                    onClick={() => setOpen(true)}
                    className="btn-outline-premium border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Apply Now →
                  </button>
                )}
              </motion.div>
            </div>
          </AnimatedSection>
        </main>
        <Footer />

        {/* Application Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Apply to Finitix</DialogTitle>
              <DialogDescription>
                We're excited to hear from you. Fill out the form below and attach your resume.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <label className="mb-1 block text-sm text-muted-foreground">Full Name *</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Your full name" required maxLength={100} />
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
                <label className="mb-1 block text-sm text-muted-foreground">Position</label>
                <input type="text" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} className={inputClass} placeholder="e.g. Full Stack Developer" maxLength={100} />
              </div>
              <div>
                <label className="mb-1 block text-sm text-muted-foreground">Experience</label>
                <input type="text" value={form.experience} onChange={(e) => setForm({ ...form, experience: e.target.value })} className={inputClass} placeholder="e.g. 3 years in web development" maxLength={200} />
              </div>
              <div>
                <label className="mb-1 block text-sm text-muted-foreground">Resume (PDF only, max 5MB)</label>
                <input
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={handleResumeChange}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:mr-3 file:rounded file:border-0 file:bg-primary/10 file:px-3 file:py-1 file:text-xs file:font-medium file:text-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-muted-foreground">Why Finitix?</label>
                <textarea value={form.cover_letter} onChange={(e) => setForm({ ...form, cover_letter: e.target.value })} className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Tell us why you'd like to join..." maxLength={2000} />
              </div>
              <button type="submit" disabled={loading} className="btn-outline-premium w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground disabled:opacity-50">
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </PageTransition>
  );
};

export default Careers;
