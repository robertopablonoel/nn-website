import React from 'react';
import S from './styles';
import { FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';
const index = ({isOpen, toggle}) => {
  return (
  <S.SidebarContainer isOpen={isOpen} onClick={toggle}>
      <S.Icon onClick={toggle}>
          <S.CloseIcon/>
      </S.Icon>
      <S.SidebarWrapper>
          <S.SidebarMenu>
              <S.SidebarLink onClick={toggle} to="meet the neighbors" smooth={true} duration={500}>
                meet the neighbors
              </S.SidebarLink>
              <S.SidebarLink onClick={toggle} to="artist" smooth={true} duration={500}> 
                artist
              </S.SidebarLink>
              <S.SidebarLink onClick={toggle} to="faq" smooth={true} duration={500}>
                faq
              </S.SidebarLink>
          </S.SidebarMenu>
          <S.Socials>
              <a href="https://twitter.com/TheNeighborsDao"><FaTwitter/></a>
              <a href="https://discord.gg/BQxj28SVFY"><FaDiscord /></a>
              <a href="https://www.instagram.com/naughtyneighbors.eth/"><FaInstagram /></a>
          </S.Socials>
      </S.SidebarWrapper>
  </S.SidebarContainer>);
};

export default index;
