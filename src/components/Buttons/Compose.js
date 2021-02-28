import React from 'react'
import styled from "styled-components"

function Compose() {
    return (
        <Wrapper>
            <img src="https://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png" alt=""/>
            <p>Compose</p>
        </Wrapper>
    )
}

export default Compose

const Wrapper = styled.div`
    display:flex;
    height:50px;
    width:150px;
    align-items:center;
    padding-left:10px;
    border-radius:50px;
    margin-top:20px;
    margin-left:20px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    cursor:pointer;
    p{
        padding-left:10px;
    }
    :hover{
        box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 30%);
        background-color:#fafafb;
    }
`
