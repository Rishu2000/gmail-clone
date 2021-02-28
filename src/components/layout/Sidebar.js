import React from 'react'
import styled from "styled-components"
import Compose from "../Buttons/Compose"
import {SideButtonItems} from "../data/SideButtonItems" 
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import HangoutContainer from "../HangoutContainer"
import PersonIcon from '@material-ui/icons/Person';
import AnnouncementIcon from '@material-ui/icons/Announcement';

function Sidebar() {
    return (
        <Wrapper>
            <ComposeWrapper>
                <Compose/>
            </ComposeWrapper>
            <SideButtonsWrapper>
                {SideButtonItems.map((item,key) => (
                    <SidebarButtonItem key={key}>{item.icon} {item.text}</SidebarButtonItem>
                ))}
            </SideButtonsWrapper>
            <MeetWrapper>
                <Text>Meet</Text>
                <SidebarButtonItem>
                    <VideocamIcon/>
                    New meeting
                </SidebarButtonItem>
                <SidebarButtonItem>
                    <KeyboardIcon/>
                    Join a meeting
                </SidebarButtonItem>
            </MeetWrapper>
            <HangoutWrapper>
                <Text>Hangouts</Text>
                <HangoutContainer/>
            </HangoutWrapper>
            <BottomIconsWrapper>
                <Image>
                <PersonIcon/>
                </Image>
                <Image>
                <AnnouncementIcon/>
                </Image>
            </BottomIconsWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div``

const ComposeWrapper = styled.div`
    margin-bottom:10px;
`

const SideButtonsWrapper = styled.div`
    padding-bottom:8px;
    border-bottom: 2px solid #f2f2f2;
`

const MeetWrapper = styled.div`
    padding-top:8px;
    padding-bottom:8px;
    border-bottom: 2px solid #f2f2f2;
`

const HangoutWrapper = styled.div`
    padding-top:8px;
    padding-bottom:8px;
    border-bottom: 2px solid #f2f2f2;
`

const BottomIconsWrapper = styled.div`
    display:flex;
    padding-top:4px;
    justify-content:center;
    color:#595959;
`

const SidebarButtonItem = styled.div`
    display:grid;
    grid-template-columns:15% auto;
    color:#595959;
    padding: 5px 25px;
    border-radius: 0 100px 100px 0;
    margin-right:10px;
    cursor:pointer;
    :hover{
        background-color:#f2f2f2;
    }
`

const Text = styled.div`
    padding: 5px 25px;
`

const Image = styled.div`
    margin-left:8px;
    cursor:pointer;
    :hover{
        color:black;
    }    
`
