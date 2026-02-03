import { Link } from "react-router-dom";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/principles", label: "Principles" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/30">
      <div className="container-narrow py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-medium text-foreground">
              Finitix
            </Link>
            <p className="mt-2 text-sm tracking-wide text-primary/80">
              Beyond Being
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3 md:items-center">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <div className="flex flex-col justify-between lg:items-end">
            <p className="text-sm text-muted-foreground/60">
              © {new Date().getFullYear()} Finitix
            </p>
            <p className="mt-4 text-xs text-muted-foreground/40 lg:mt-0 lg:text-right">
              Building focused products that quietly create value.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
