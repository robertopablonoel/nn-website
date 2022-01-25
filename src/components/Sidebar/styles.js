import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

const S = {}

S.SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: black;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

S.CloseIcon = styled(FaTimes)`
 color: #fff;
`;

S.Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

S.SidebarWrapper = styled.div`
    color: #fff;
`

S.SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    text-align: center;
    @media screen and (max-width(480px)){
        grid-template-rows: repeat(6,60px);
    }
`

S.SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    &:hover {
        color: #9370db;
        transition: 0.2s ease-in-out;
    }
`

S.Socials = styled.div`
    display: flex;
    flex-direction: row;
    justify-self: flex-start;
    justify-content: center;
    align-items: center;
    a {
        color: #fff;
        cursor: pointer;
        font-size: 2.5rem;
        font-weight: bold;
        padding: 1rem;
        text-decoration: none;
        &:hover {
            color: #9370db;
            transition: 0.2s ease-in-out;
        }
    }
`
export default S;