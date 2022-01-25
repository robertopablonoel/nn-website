import React from 'react';
import S from './styles';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
const index = ({isOpen, toggle}) => {
  return (
  <S.SidebarContainer isOpen={isOpen} onClick={toggle}>
      <S.Icon onClick={toggle}>
          <S.CloseIcon/>
      </S.Icon>
      <S.SidebarWrapper>
          <S.SidebarMenu>
              <S.SidebarLink onClick={toggle}>
                meet the neighbors
              </S.SidebarLink>
              <S.SidebarLink onClick={toggle}>
                roadmap
              </S.SidebarLink>
              <S.SidebarLink onClick={toggle}> 
                the games
              </S.SidebarLink>
              <S.SidebarLink onClick={toggle}>
                team
              </S.SidebarLink>
              <S.SidebarLink onClick={toggle}>
                faq
              </S.SidebarLink>
          </S.SidebarMenu>
          <S.Socials>
                <a><FaTwitter /></a>
                <a><FaDiscord /></a>
          </S.Socials>
      </S.SidebarWrapper>
  </S.SidebarContainer>);
};

export default index;
