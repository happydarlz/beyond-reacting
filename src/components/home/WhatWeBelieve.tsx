import AnimatedSection from "../ui/AnimatedSection";

const WhatWeBelieve = () => {
  return (
    <AnimatedSection className="section-spacing">
      <div className="container-narrow">
        <div className="divider-subtle mb-16" />
        
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <span className="text-sm uppercase tracking-widest text-muted-foreground">
              What we believe
            </span>
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
              Built with purpose.
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Technology should not demand constant attention. It should be dependable, 
              clear, and quietly effective. We believe the best products are the ones 
              you don't have to think about — they simply work, reduce risk, and make 
              everyday systems stronger.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At Finitix, we hold ourselves to this standard in everything we build. 
              Our products are designed to fade into the background while doing 
              critical work — preventing issues, automating responses, and ensuring 
              reliability without requiring constant human oversight.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default WhatWeBelieve;
