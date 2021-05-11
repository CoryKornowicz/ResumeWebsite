import React from 'react'
import { SideBarContainer, CloseIcon, Icon, SideBarLink, SideBarMenu, SideBarWrapper, SideBtnWrap, SideBarRoute } from './SideBarElements'

export const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='about' onClick={toggle}>About Me</SideBarLink>
                    <SideBarLink to='discovery' onClick={toggle}>Discovery and Projects</SideBarLink>
                    <SideBarLink to='research' onClick={toggle}>Research</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to='contact'>Contact Me</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar