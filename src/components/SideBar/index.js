import React from 'react'
import { SideBarContainer, CloseIcon, Icon, SideBarLink, SideBarMenu, SideBarWrapper, SideBtnWrap, SideBarRoute } from './SideBarElements'

export const SideBar = () => {
    return (
        <SideBarContainer>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='about'>About Me</SideBarLink>
                    <SideBarLink to='discovery'>Discovery and Projects</SideBarLink>
                    <SideBarLink to='research'>Research</SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to='contact'>Contact Me</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar