import { Nav as NavR, NavBarContainer, NavBarLogo, MobileIcon, NavMenu, NavItem, NavLinks } from "./NavBarElements"
import {FaBars} from 'react-icons/fa'

export const NavBar = () => {
    return (
        <NavR>
            <NavBarContainer>
                <NavBarLogo to="/" >Cory Kornowicz</NavBarLogo>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discovery">Experience and Interests</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="research">Research</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavBarContainer>
        </NavR>
    )
}