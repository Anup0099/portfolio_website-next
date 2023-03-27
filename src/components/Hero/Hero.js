import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <h3>Hi, I'm Anup</h3>
        <h4>I'm an aspiring Full Stack Developer</h4>
      </SectionTitle>
      <SectionText>
        <p>
          I'm a frontend developer with a passion for building beautiful and
          functional web applications.
        </p>
      </SectionText>
      <Button
        onClick={() => {
          window.location.href = "https://github.com/Anup0099";
        }}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
