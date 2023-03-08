import styled from "styled-components";
import { colorVar } from "../../../../styled-components/variables"

export const FormSpace = styled.div`

    .form-space {
        padding:2rem 1.5rem;
        background-color: #FFFFFF;
        border: 2px solid ${colorVar.secondary};
        box-shadow: 0.5rem 0.5rem 0 0px #adb5bd;

        label {
            font-family: 'Poppins', sans-serif;
           
        }
        input, select {
            border: 2px solid ${colorVar.secondary};
            border-radius: 0;
            padding: 1rem;
           
        }

    }
    .button-add-users {
        font-family: 'Poppins', sans-serif;
        background-color: ${colorVar.primary};
        border-color: ${colorVar.primary};
        border-radius: 0px;
        border: none;
        width: 100%;
    
}
`