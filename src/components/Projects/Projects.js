import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
const projectDemo=[
  {
    title: "Project 1",
    description: "this a site of hotel booking app",
  },
  {
    title: "Project 2",
    description: "this a site of hotel booking app",
  },
  {
    title: "Project 3",
    description: "this a site of hotel booking app",
  },
];
const Projects = (props) => (
  <Section nopadding id="projects">
    <SectionDivider></SectionDivider>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
    {projects.map((project) => (
      <BlogCard key={project.id}>
        <Img src={project.image} alt={project.title} />
       
          <TitleContent>{project.title}</TitleContent>

         

      
      </BlogCard>
    ))}
    </GridContainer>
  </Section>
);

export default Projects;
