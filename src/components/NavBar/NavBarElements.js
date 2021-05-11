import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'


export const Nav = styled.nav`
    background: #000;
    height: 60px; 
    display: flex;
`

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
`

export const NavBarLogo = styled(LinkR)`
    color: #fff; 
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem; 
    display: flex; 
    align-items: center; 
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;  
`

export const MobileIcon = styled.div`
    disply: none;

    @media screen and (max-width: 760px) {
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

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center; 
    text-decorations: none; 
    padding: 0 1rem; 
    height: 100%;
    curson: pointer;

    &.acitve {
        border-bottom: 3px solid #01bf71
    }

`

