import React from 'react'
import styled from "styled-components"
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function HangoutContainer() {
    return (
        <Wrapper>
            <MainPerson>
                <AccountCircleIconImg/>
                <PersonInfo>
                    <Text>Rishav</Text>
                    <ExpandMoreIconImg/>
                </PersonInfo>
                <ImgCon>
                <AddIconImg/>
                </ImgCon>
            </MainPerson>
            <OtherPerson>
                <Person>
                <AccountCircleIconImg/>
                <OtherPersonText>Ankit</OtherPersonText>
                </Person>
            </OtherPerson>
        </Wrapper>
    )
}

export default HangoutContainer

const Wrapper = styled.div`
    display:grid;
    grid-template-rows:50px 100px;
`

const MainPerson = styled.div`
    display:grid;
    grid-template-columns:55px auto 50px;
    align-items:center;
    margin-left:25px;
    margin-right:25px;
    color:#666666;
    border-bottom: 2px solid #f2f2f2;
`

const OtherPerson = styled.div`
    color: #666666;
    margin: 0 25px;
`

const Person = styled.div`
    display:flex;
    cursor:pointer;
    padding: 5px 0;

    :hover{
        background:#f2f2f2;
    }
`

const PersonInfo = styled.div`
    display:flex;
    margin-left:-25px;
`

const Text = styled.div`
    cursor:pointer;
`

const ImgCon = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

const AddIconImg = styled(AddIcon)`
    cursor:pointer;
    :hover{
        background:#f2f2f2;
        padding:5px;
        border-radius:50%;
    }
`

const AccountCircleIconImg = styled(AccountCircleIcon)`
    cursor:pointer;
`

const ExpandMoreIconImg = styled(ExpandMoreIcon)`
    cursor:pointer;
`

const OtherPersonText = styled.div`
    padding-left:4px;
`