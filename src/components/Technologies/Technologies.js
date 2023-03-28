import React from 'react'
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiNodejsSmall,
  DiJava,
  DiDatabase,
  DiNodejs,
  DiMongodb,
  DiHtml5,
} from 'react-icons/di'
import { SiCplusplus, SiMysql, SiNextDotJs } from 'react-icons/si'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles'

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies int the web development world.
      From backend to frontend.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiHtml5 size={50} />
          <DiReact size={50} />
          <SiNextDotJs size={50} />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Exprience with reactjs</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejsSmall size={50} />
        <ListContainer>
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>Exprience with nodejs</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiFirebase size={50} />
          <SiMysql size={50} />
          <DiMongodb size={50} />
        </picture>
        <ListContainer>
          <ListTitle>Database</ListTitle>
          <ListParagraph>Exprience with mongodb,sql</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJava size={50} />
          <SiCplusplus size={50} />
        </picture>
        <ListContainer>
          <picture>
            <ListTitle>Java,CPP</ListTitle>
          </picture>
          <ListParagraph>Exprience with Java</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
