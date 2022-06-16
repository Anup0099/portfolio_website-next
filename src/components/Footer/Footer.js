import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkTitle>Mail</LinkTitle>
        <LinkItem href="mailto: anuppal602@gmail.com">
          anuppal602@gmail.com{" "}
        </LinkItem>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Getting better 1 percent everyday </Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/Anup0099">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/anup-pal-ba73a01b6/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://google.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
