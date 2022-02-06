import React from 'react';
import S from './styles';
import { FaBars, FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';
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
                        <S.NavLinks to="meet the neighbors"  activeClass="active" smooth={true} duration={500}>
                            meet the neighbors
                        </S.NavLinks>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLinks to="the games" activeClass="active" smooth={true} duration={500}>
                            the games
                        </S.NavLinks>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLinks to="team"  activeClass="active" smooth={true} duration={500}>
                            team
                        </S.NavLinks>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLinks to="faq" activeClass="active" smooth={true} duration={500}>
                            faq
                        </S.NavLinks>
                    </S.NavItem>
                </S.NavMenu>
            </S.NavContainer>
            <S.Socials>
                <a href="https://twitter.com/nottyneighbors"><FaTwitter/></a>
                <a href="https://discord.gg/BQxj28SVFY"><FaDiscord /></a>
                <a href="https://www.instagram.com/naughtyneighbors.sol/"><FaInstagram /></a>
            </S.Socials>
        </S.Nav>
      </>
  )
};

export default Navbar;
