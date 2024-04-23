import Section from "../Section";
import { useRef } from "react";

import CompanyLogos from "../hero/CompanyLogos";

import HeroContainer from "../hero";
import Intro from "../hero/intro";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings=""
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <Intro />
        <HeroContainer />
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
    </Section>
  );
};

export default Hero;
