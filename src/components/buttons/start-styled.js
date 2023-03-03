import styled , {keyframes} from "styled-components";


export const ContainerBody = styled.section`

    color: white;
    background-color: #020100;
    width: 100%;
    height: 100vh;
    display: flex;


    `    

export const ContainerButtons = styled.section`

    display: flex;
    flex-direction: column;
    height: 50vh; 
    justify-content: center; 
    gap:60px;
    `

export const ButtonF = styled.img`

    max-width: 100px;
    
    `
export const Text = styled.div`

max-width: auto;
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content: space-between;
gap:70px;

`

export const Look = styled.div`

display: flex;
width: 100%;
justify-content: flex-end;



`
export const Hour= styled.div`

display: flex;
width: 100%;
justify-content: center;
margin-top: 200px;
color: white;



`
const rotate1= keyframes`

from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Rotate= styled.img`

transform-origin: center;
animation: ${rotate1} 8s linear infinite;
`
