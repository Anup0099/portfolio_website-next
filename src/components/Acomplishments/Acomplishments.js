import React from 'react'
import { Boxes, Box, BoxNum, BoxText, BoxImg } from './AcomplishmentsStyles'
import {
  Section,
  SectionSubText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { SocialIcons } from '../Header/HeaderStyles'
import { SocialIconsContainer } from '../Footer/FooterStyles'
import { FaBloggerB } from 'react-icons/fa'

const data = [
  {
    text: 'Google Kickstart',
    img: '/images/kickstart.png',
    url:
      'https://drive.google.com/file/d/1TN-h5TsmcyFcxY6WQRaok12CV_rVuytq/view?usp=sharing',
  },
]

const Acomplishments = () => (
  <Section>
    <SectionTitle> Personal Accomplishments</SectionTitle>
    <SectionSubText>Blogs</SectionSubText>
    <SocialIconsContainer>
      <SocialIcons href="https://dev.to/anuppal48672810">
        <FaBloggerB size="2rem" />
      </SocialIcons>
    </SocialIconsContainer>
  <SectionSubText>Certifications</SectionSubText>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxImg
            src={card.img}
            onClick={() => {
              window.open(card.url, '_blank')
            }}
          />

          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
)

export default Acomplishments
