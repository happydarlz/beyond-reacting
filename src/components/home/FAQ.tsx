import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Finitix?",
    answer: "Finitix is a product-based software company focused on building practical, long-lasting technology. We create tools that remove complexity, reduce human error, and make systems more reliable without adding noise or unnecessary control.",
  },
  {
    question: "What does 'Beyond Being' mean?",
    answer: "Beyond Being represents our belief that software should move past basic functionality. Beyond existing. Beyond reacting. Beyond complexity. We design products that anticipate problems, act with intention, and stay out of the way once their job is done.",
  },
  {
    question: "Who founded Finitix?",
    answer: "Finitix was founded by Jnaneswar with a vision to create software that protects itself, corrects itself, and supports people without constant oversight—moving beyond reactive solutions to truly proactive technology.",
  },
  {
    question: "What kind of software does Finitix build?",
    answer: "We build focused, product-first software that works quietly in the background. Our solutions include automation systems, self-healing infrastructure, predictive maintenance tools, and any software that needs to be reliable, proactive, and long-lasting.",
  },
  {
    question: "What are Finitix's core principles?",
    answer: "We operate on four core principles: Clarity over complexity (if it's hard to understand, it's not finished), Prevention over repair (the best solution avoids the problem entirely), Quiet reliability (technology should work without constant attention), and Long-term value (we build products meant to last, not chase trends).",
  },
  {
    question: "How is Finitix different from other software companies?",
    answer: "While most companies build reactive software that waits for problems, we build proactive software that anticipates them. Our products are designed to work silently, fix issues automatically, and create value without requiring constant human oversight.",
  },
];

const FAQ = () => {
  return (
    <AnimatedSection className="section-spacing">
      <div className="container-narrow">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-muted-foreground"
        >
          Common Questions
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border/50 bg-card/30 px-6 backdrop-blur-sm transition-colors data-[state=open]:border-primary/30 data-[state=open]:bg-card/50"
              >
                <AccordionTrigger className="py-6 text-left text-lg font-medium text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default FAQ;
