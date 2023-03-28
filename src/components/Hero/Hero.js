import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <h3>Welcome To My Personal Portfolio</h3>
        {/* <h5 style={{ marginTop: '5px' }}>
          I'm an aspiring Full Stack Developer
        </h5> */}
      </SectionTitle>
      <SectionText>
        <p>
          I am Anup Pal, an engineering student at VIT bhopal pursuing my B.Tech
          in Computer Science and Engineering. I'm an aspiring Full Stack
          Developer.
        </p>
      </SectionText>
      <Button
        onClick={() => {
          window.location.href = 'https://leetcode.com/Anup009/'
        }}
      >
        Coding Profile
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
