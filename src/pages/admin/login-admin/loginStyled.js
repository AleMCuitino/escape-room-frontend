import styled from "styled-components";

export const ContainerLogin = styled.section`
background-color: #FF4700;
width: 100%;
height: 100vh;

`

export const LoginMain = styled.div`
width: 100vw;
height: auto;
display: flex;
flex-direction: column;
justify-items: content;
align-items: center;
`
export const FactoriaLogo = styled.div`
    img {
        width: 10em;
        display: flex;
        padding: 2rem;
    }
`

export const GameLogo = styled.div`
    img {
        width: 10em;
    }
`

export const ToAction = styled.div`
    width: 50vw;
    color: #FFFFFF;
    padding: 2rem 0 2rem 0;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    justify-items: content;
    align-items: center;
    
`

export const StyledForm = styled.div`
    div {
        display: flex;
        flex-direction: column;
        justify-items: content;
        align-items: center;
        background-color: #FFFFFF;
        border: 2px solid #000000;
        width: 50vw;
        height: auto;
        box-shadow: 0.5rem 0.5rem 0 0px #adb5bd;
    }
    form {
        font-family: 'Poppins', sans-serif;
        padding: 1rem 0 1rem 0;
        gap: 1rem;
        width: 45vw;
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