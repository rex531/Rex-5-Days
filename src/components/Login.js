import React from 'react'
import styled from 'styled-components'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Login() {
    return (
        <Container>
            <Workspace>
                <Addtothis>
                    <DoubleArrowIcon />Welcome to Channel
                </Addtothis>
                <DetailQuestion>
                    <HelpOutlineIcon />
                </DetailQuestion>
            </Workspace>
        </Container>
    )
}

export default Login

const Container = styled.div`
    
`
const Workspace = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: 1px solid #532754;
`

const Addtothis = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    color: #3F0E40;
    fill: #3F0E40;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
`

const DetailQuestion = styled.div`
    color: rgb(188, 171, 188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-right: 19px;
    cursor: pointer;
`