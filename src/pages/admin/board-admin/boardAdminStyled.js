import styled from "styled-components";
import { colorVar } from "../../../styled-components/variables"

export const Board = styled.section`

height: 100%;
z-index: 1;
    h1 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 2rem;
    }
    h2 {
        font-weight: 800;
    }
    .add-form {
        
    }
    .flower {
        position: absolute;
        z-index: -1;
        top: 25%;
        left:0;
        opacity: .5;
    }
    .flower1 {
        position: absolute;
        z-index: -1;
        right:0;
        bottom:-7rem;
    }

    .showTable{
        border: 2px solid black;
    }
`