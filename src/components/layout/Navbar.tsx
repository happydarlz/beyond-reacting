import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/principles", label: "Principles" },
  { href: "/product", label: "Product" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50 bg-background/80 backdrop-blur-md"
    >
      <nav className="container-narrow flex h-20 items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-3 text-xl font-medium tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          <img 
            src={logo} 
            alt="Finitix Logo" 
            className="h-12 w-auto"
          />
          <span>Finitix</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`link-subtle text-sm ${
                  location.pathname === link.href ? "text-foreground" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button className="flex flex-col gap-1.5 md:hidden" aria-label="Menu">
          <span className="h-px w-5 bg-foreground" />
          <span className="h-px w-5 bg-foreground" />
        </button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
