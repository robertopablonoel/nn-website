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
              <S.SidebarLink onClick={toggle} to="the games" smooth={true} duration={500}> 
                the games
              </S.SidebarLink>
              <S.SidebarLink onClick={toggle} to="team" smooth={true} duration={500}>
                team
              </S.SidebarLink>
              <S.SidebarLink onClick={toggle} to="faq" smooth={true} duration={500}>
                faq
              </S.SidebarLink>
          </S.SidebarMenu>
          <S.Socials>
              <a href="https://twitter.com/nottyneighbors"><FaTwitter/></a>
              <a href="https://discord.gg/BQxj28SVFY"><FaDiscord /></a>
              <a href="https://www.instagram.com/naughtyneighbors.sol/"><FaInstagram /></a>
          </S.Socials>
      </S.SidebarWrapper>
  </S.SidebarContainer>);
};

export default index;