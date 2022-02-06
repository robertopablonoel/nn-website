import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
const S = {}

S.Nav = styled.nav`
    background: black;
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

S.NavContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 80px;
    z-index: 1;
    width: 100%;
    max-width: 1100px;
`

S.NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`

S.Socials = styled.div`
    display: flex;
    flex-direction: row;
    justify-self: flex-start;
    align-items: center;
    a {
        color: #fff;
        margin-left: 1rem;
        cursor: pointer;
        font-size: 2rem;
        font-weight: bold;
        text-decoration: none;
        &:hover {
            color: #9370db;
        }
    }

    @media screen and (max-width: 960px) {
        display: none;
    }
`

S.MobileIcon = styled.div`
    display: none;


    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`
S.NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-left: 144px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

S.NavItem = styled.li`
    height: 80px;
`

S.NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;

    &:active {
        color: #9370db;
    }
    &:hover {
        color: #9370db;
    }
`
export default S;