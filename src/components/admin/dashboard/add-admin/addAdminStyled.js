import styled from "styled-components";
import { colorVar } from "../../../../styled-components/variables"

export const FormSpace = styled.div`
    background-color: #FFFFFF;
    border: 2px solid ${colorVar.secondary};
    box-shadow: 0.5rem 0.5rem 0 0px #adb5bd;

    .form-space {
        font-family: 'Poppins', sans-serif;
        .user-box {
            font-family: 'Poppins', sans-serif;
            width: 100%;
        }
        .mail-box {
            font-family: 'Poppins', sans-serif;
            width: 100%;  
        }
        .place-holder {
            font-family: 'Fira', monospace;
        }
        .button-add-admin {
        font-family: 'Poppins', sans-serif;
        background-color: ${colorVar.secondary};
        border-color: ${colorVar.secondary};
        border-radius: 0px;
        border: none;
        width: 100%;
    }

    label{
    font-size:1rem;
    font-weight:600;
    }
    
    
    input,select{
        border: 2px solid black;
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



}    
`