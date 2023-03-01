import styled from "styled-components";

export const ContainerLogin = styled.section`
background-color: #FF4700;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
`

export const LoginMain = styled.div`
width: 100vw;
height: auto;
display: flex;
flex-direction: column;
justify-items: content;
align-items: center;
`

export const GameLogo = styled.h1`
`

export const ToAction = styled.p`
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    
`

export const StyledForm = styled.div`
    div {
        display: flex;
        flex-direction: column;
        justify-items: content;
        align-items: center;
        background-color: #FFFFFF;
        border: 2px solid #000000;
        padding: 1rem;
        width: 40vw;
        height: auto;
        box-shadow: 0.5rem 0.5rem 0 0px #adb5bd;
    }
    form {
        font-family: 'Poppins', sans-serif;
        gap: 1rem;
        width: 30vh;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        ::placeholder {
            color: azure;
        }
        
    }
    
`