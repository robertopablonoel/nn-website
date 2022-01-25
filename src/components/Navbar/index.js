import React from 'react';
import S from './styles';
import { FaBars, FaTwitter, FaDiscord } from 'react-icons/fa';
const Navbar = ({ toggle }) => {
  return (
      <>
        <S.Nav>
            <S.NavContainer>
                <S.MobileIcon onClick={toggle}>
                    <FaBars />
                </S.MobileIcon>
                <S.NavMenu>
                    <S.NavItem>
                        <S.NavLinks to="about">
                            meet the neighbors
                        </S.NavLinks>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLinks to="about">
                            roadmap
                        </S.NavLinks>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLinks to="about">
                            the games
                        </S.NavLinks>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLinks to="about">
                            team
                        </S.NavLinks>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLinks to="about">
                            faq
                        </S.NavLinks>
                    </S.NavItem>
                </S.NavMenu>
            </S.NavContainer>
            <S.Socials>
                <a><FaTwitter /></a>
                <a><FaDiscord /></a>
            </S.Socials>
        </S.Nav>
      </>
  )
};

export default Navbar;
