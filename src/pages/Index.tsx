import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageTransition from "../components/layout/PageTransition";
import Hero from "../components/home/Hero";
import WhoWeAre from "../components/home/WhoWeAre";
import WhatGuidesUs from "../components/home/WhatGuidesUs";
import BeyondBeing from "../components/home/BeyondBeing";
import HowWeBuild from "../components/home/HowWeBuild";
import ClosingStatement from "../components/home/ClosingStatement";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <WhoWeAre />
          <WhatGuidesUs />
          <BeyondBeing />
          <HowWeBuild />
          <ClosingStatement />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
