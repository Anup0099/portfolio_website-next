import React from "react";
import { DiFirebase, DiReact, DiZend, DiNodejsSmall ,DiJava} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

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
        <DiReact size={50} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Exprience with reactjs</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size={50} />
        <ListContainer>
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>Exprience with nodejs</ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejsSmall size={50} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Exprience with node.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size={50} />
        <ListContainer>
          <ListTitle>Java</ListTitle>
          <ListParagraph>Exprience with Java</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
