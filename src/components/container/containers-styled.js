
import {colorVar}  from '@/styled-components/variables.js';
import styled from "styled-components";

export const Container = styled.section`

    display: flex;
    justify-content: center;
    text-align: center;
    height: 65vh;
    border: ${colorVar.digital} 2px solid;
    border-radius: 24px;
    margin-top: 90px;

    `

export const TitleLocation = styled.h1`

    display: flex;
    background-color:${colorVar.digital2};
    max-width: 600px;           
    max-height:40px; 
    border: ${colorVar.digital} 2px solid;
    border-radius: 10px;
    font-size:20px;
    align-items: center;
    padding: 20px;
    margin-top: 40px;
    `

export const Paragraph= styled.p`

    display: flex;
    background-color:${colorVar.secondary};
    max-width: 600px;           
    height: max-content;
    min-height: 130px;
    border: ${colorVar.digital} 2px solid;
    border-radius: 10px;
    font-size: 15px;
    margin-top: -50px; 
    padding: 15px;
    
    `
export const ContainerAnswer= styled.div`

    display: flex;
    align-items:center;
        

    `
    export const FormAnswer= styled.form`

    display: flex;
    
    max-width: 600px;         
    border: ${colorVar.digital} 2px solid;
    border-radius: 10px;
    background-color:${colorVar.secondary};
    color:${colorVar.digital};
    font-size:20px;          
    align-items: center;
    margin: 0;
    font-size:20px;
    padding: 15px;
    margin-top: -2.5rem;
        
        input {
        border: 0;
        outline: none;
        color:${colorVar.digital};
        background-color:${colorVar.secondary};

        ::placeholder {       
        color:${colorVar.digital};
        }
        }


    `

export const Submit = styled.button`

    display: flex;
    color:${colorVar.digital};
    background-color:${colorVar.digital2};         
    height:40px; 
    border: ${colorVar.digital} 2px solid;
    border-radius: 10px;
    font-size:20px;
    justify-content: center;
    
    `


export const ClueButton = styled.img`

    max-width: 100px;
    position: absolute;
    right: 4rem;
    `