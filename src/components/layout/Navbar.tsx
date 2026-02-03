import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/principles", label: "Principles" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-0 right-0 top-0 z-50"
      >
        <div className="bg-background/60 backdrop-blur-xl">
          <nav className="container-narrow flex h-20 items-center justify-between">
            <Link 
              to="/" 
              className="group flex items-center gap-3 text-lg font-medium tracking-tight text-foreground transition-opacity hover:opacity-70"
            >
              {/* Logo mark */}
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <span className="text-sm font-semibold text-primary">F</span>
              </div>
              <span>Finitix</span>
            </Link>

            <ul className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`relative px-4 py-2 text-sm transition-colors ${
                      location.pathname === link.href 
                        ? "text-foreground" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {location.pathname === link.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 -z-10 rounded-lg bg-secondary/50"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors hover:bg-secondary/50 md:hidden" 
              aria-label="Menu"
            >
              <motion.span 
                animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 4 : 0 }}
                className="h-px w-5 bg-foreground" 
              />
              <motion.span 
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                className="h-px w-5 bg-foreground" 
              />
              <motion.span 
                animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -4 : 0 }}
                className="h-px w-5 bg-foreground" 
              />
            </button>
          </nav>
        </div>
        
        {/* Bottom border with gradient */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="container-narrow py-6">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-base transition-colors ${
                        location.pathname === link.href 
                          ? "bg-secondary/50 text-foreground" 
                          : "text-muted-foreground hover:bg-secondary/30 hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
