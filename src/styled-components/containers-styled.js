
import {colorVar}  from '@/styled-components/variables.js';
import { Modal } from 'react-bootstrap';
import styled from "styled-components";

export const ContainerBody = styled.section`

    color: ${colorVar.digital};
    background-color: ${colorVar.secondary} ;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;

    .mboard-timeline{
        margin-bottom: 2rem;
    }

    @media (min-width: 768px){
        .mboard-timeline{
        margin-bottom:4rem;
    }
    }

    `

/* layout interno de los elementos */
export const Container = styled.section`

    height: 65vh;
    border: ${colorVar.digital} 2px solid;
    border-radius: 24px;
    position:relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media(min-width: 768px){
        flex-direction: row;
        justify-content: center;
        text-align: center;
    }

    `

export const TitleLocation = styled.h1`

    display: flex;
    background-color:${colorVar.digital2};
    max-width: 600px;           
    min-height:40px; 
    border: ${colorVar.digital} 2px solid;
    border-radius: 10px;
    font-size:16px;
    align-items: center;
    padding: 20px;
    text-align:center;
    justify-content: center;

    @media (min-width: 768px){
        text-align: left;
        font-size:20px;
    }

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
    margin-top: -34px; 
    padding: 15px;

    @media (min-width: 768px){
        align-self: self-start;
    }
    
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
    padding: 1rem;
    margin-top: -2.5rem;
    position: relative;
        
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

export const ClueContainer = styled.aside`

    margin-top: auto;

    @media (min-width: 768px){
        max-width: 100px;
        position: absolute;
        right: -3rem;
        top: 20%;
    }

`


export const ClueButton = styled.img`

    max-width: 100px;
    margin-bottom: 2rem;

    `

export const ClueModalWindow = styled(Modal)`

    .modal-content{
        background-color:${colorVar.secondary};
        border: 2px solid ${colorVar.digital};
        color: ${colorVar.digital};

        .modal-header{
            border-bottom: none;
            .btn-close{
                color: ${colorVar.digital};
                background:transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='aqua' %3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
            }
        }


        .modal-body{
            padding-bottom:2.5rem;
        }

    }

`    