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
                            Meet the Neighbors
                        </S.NavLinks>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLinks to="artist" activeClass="active" smooth={true} duration={500}>
                            Artist
                        </S.NavLinks>
                    </S.NavItem>
                    <S.NavItem>
                        <S.NavLinks to="faq" activeClass="active" smooth={true} duration={500}>
                            FAQ
                        </S.NavLinks>
                    </S.NavItem>
                    {/* <S.NavItem>
                        <S.NavLinks to="team"  activeClass="active" smooth={true} duration={500}>
                            team
                        </S.NavLinks>
                    </S.NavItem> */}
                </S.NavMenu>
            </S.NavContainer>
            <S.Socials>
                <a href="https://twitter.com/naughtyamigos"><FaTwitter/></a>
                <a href="https://discord.gg/BQxj28SVFY"><FaDiscord /></a>
                <a href="https://www.instagram.com/naughtyneighbors.eth/"><FaInstagram /></a>
            </S.Socials>
        </S.Nav>
      </>
  )
};

export default Navbar;
