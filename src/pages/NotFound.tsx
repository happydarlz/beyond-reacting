import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageTransition from "../components/layout/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
        <h1 className="text-7xl font-medium tracking-tight text-foreground md:text-9xl">
          404
        </h1>
        <p className="mt-8 text-xl text-muted-foreground">
          This page doesn't exist.
        </p>
        <Link
          to="/"
          className="btn-outline-premium mt-12"
        >
          Back to home
        </Link>
      </div>
    </PageTransition>
  );
};

export default NotFound;
