import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import WhatWeBelieve from "../components/home/WhatWeBelieve";
import Stats from "../components/home/Stats";
import OurApproach from "../components/home/OurApproach";
import ClosingStatement from "../components/home/ClosingStatement";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhatWeBelieve />
        <Stats />
        <OurApproach />
        <ClosingStatement />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
