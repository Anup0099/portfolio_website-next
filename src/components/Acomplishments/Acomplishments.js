import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import { AiFillInstagram, AiFillBook } from "react-icons/ai";
import { SocialIcons } from "../Header/HeaderStyles";
import { SocialIconsContainer } from "../Footer/FooterStyles";

import { FaBloggerB } from "react-icons/fa";

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Blogs
    
    </SectionTitle>

    <SocialIconsContainer>
      <SocialIcons href="https://dev.to/anuppal48672810">
        <FaBloggerB size="3rem" />
      </SocialIcons>
    </SocialIconsContainer>
  </Section>
);

export default Acomplishments;
