import styled from "styled-components";
import { colorVar } from "../../../styled-components/variables";

export const ContainerLogin = styled.section`
background-color: ${colorVar.primary};
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`

export const LoginMain = styled.div`
width: 100%;
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
    width: 100%;
    color: #FFFFFF;
    padding: 2rem 0 2rem 0;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    justify-items: content;
    align-items: center;
    text-align: center;
    
`

export const StyledForm = styled.div`
    div {
        display: flex;
        flex-direction: column;
        justify-items: content;
        align-items: center;
        background-color: #FFFFFF;
        border: 2px solid #000000;
        width: 100%;
        height:100%;
        box-shadow: 0.5rem 0.5rem 0 0px #adb5bd;
        padding: 2rem 1.5rem;
    }
    form {
        font-family: 'Poppins', sans-serif;
        padding: 0 0 1rem 0;
        gap: 0.5rem;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

    label{
    font-size:1rem;
    font-weight:600;
    }
    
    
    input{
        border: 1px solid black;
        padding: 1rem;
        font-size: 1rem;
        &::placeholder{
            font-size: 1rem;
        }
        &:focus, &:active{
            background:#ff470030;
            outline: none;
        }
    }    

    button {
        background-color: ${colorVar.secondary};
        color: #FFFFFF;
        width: 100%;
        border: 1px solid black;
        padding: 1rem;
        font-size:1rem;
    }

  
}    
`