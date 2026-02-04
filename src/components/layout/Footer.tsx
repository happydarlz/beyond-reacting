import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50">
      <div className="container-narrow py-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3 text-center md:text-left">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Finitix Logo" 
                className="h-10 w-auto"
              />
              <div>
                <span className="text-lg font-medium text-foreground">
                  Finitix
                </span>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Beyond Being
                </p>
              </div>
            </Link>
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
