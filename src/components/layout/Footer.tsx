import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50">
      <div className="container-narrow py-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <Link to="/" className="text-lg font-medium text-foreground">
              Finitix
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Beyond Being
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            Building focused products that quietly create value.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
