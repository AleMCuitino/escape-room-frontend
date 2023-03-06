import styled from "styled-components";
import { colorVar } from "../../../../styled-components/variables"

export const FormSpace = styled.div`
    .form-space {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
        border: 2px solid ${colorVar.secondary};
        height: auto;
        box-shadow: 0.5rem 0.5rem 0 0px #adb5bd;
        .user-box {
            font-family: 'Poppins', sans-serif;
            width: 30vw;
        }
        .mail-box {
            font-family: 'Poppins', sans-serif;
            width: 35vw;  
        }
    }
    .button-add-users {
        font-family: 'Poppins', sans-serif;
        background-color: ${colorVar.primary};
        border-color: ${colorVar.primary};
        border-radius: 0px;
        border: none;
        width: 30vw;
    
}
`