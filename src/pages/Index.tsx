import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import WhatWeBelieve from "../components/home/WhatWeBelieve";
import OurApproach from "../components/home/OurApproach";
import HowItWorks from "../components/home/HowItWorks";
import Examples from "../components/home/Examples";
import FAQ from "../components/home/FAQ";
import ClosingStatement from "../components/home/ClosingStatement";
import PageTransition from "../components/ui/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <WhatWeBelieve />
          <OurApproach />
          <HowItWorks />
          <Examples />
          <FAQ />
          <ClosingStatement />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
