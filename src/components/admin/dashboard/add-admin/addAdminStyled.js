import styled from "styled-components";
import { colorVar } from "../../../../styled-components/variables"

export const FormSpace = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border: 2px solid ${colorVar.secondary};
    max-height: 70vh;
    width: 60vw;
    box-shadow: 0.5rem 0.5rem 0 0px #adb5bd;
    .form-space {
        font-family: 'Poppins', sans-serif;
        width: 50vw;
        .user-box {
            font-family: 'Poppins', sans-serif;
            width: 30vw;
        }
        .mail-box {
            font-family: 'Poppins', sans-serif;
            width: 35vw;  
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
        width: 50vw;
    }
}    
`