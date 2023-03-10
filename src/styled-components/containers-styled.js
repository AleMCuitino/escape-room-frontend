
import {colorVar}  from './variables';
import { Modal } from 'react-bootstrap';
import styled from "styled-components";

export const ContainerBody = styled.section`

    color: ${colorVar.digital};
    background: url( ${ (props) => props.bgImg } ) no-repeat center center / cover;
    width: 100%;
    display: flex;
    align-items: center;

    
 .gameImg{
    max-height: 500px ;
    object-fit: contain;
   } 
    
    .mboard-timeline{
        margin-bottom: 2rem;
    }

    @media (min-width: 768px){
      height: 100%;
        .mboard-timeline{
        margin-bottom:4rem;
        }

    @media (max-height: 768px){
        height: 100%;
        overflow: auto;
    }

    

    }

    @media screen and (max-width: 844px) and (orientation: landscape){
        
    > .container{
        padding-top: 0!important;
        padding-bottom: 0!important;
        height: 100%;
        place-content: center;
        display: flex;
        flex-direction: column;
       }

    .mboard-timeline{
        margin-bottom: 2.4rem;
    }

    }

    `

/* layout interno de los elementos */
export const Container = styled.section`

   /*  height: 65vh; */
    border: ${colorVar.digital} 2px solid;
    border-radius: 24px;
    position:relative;
    padding-top: 1rem;
    padding-bottom: 1rem;

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
    border-radius: 10px;
    font-size:16px;
    align-items: center;
    padding: 20px;
    text-align:center;
    justify-content: center;

    backdrop-filter: blur(5px);
    border: 1px solid rgb(0 255 255 / 18%);
    box-shadow: 0 8px 32px 0 rgb(29 170 169 / 37%);

    animation: pulseLight 5s ease-in infinite alternate;

    @media (min-width: 768px){
        text-align: left;
        font-size:20px;
    }

    @media screen and (max-width: 844px) and (orientation: landscape){
       font-size: 1rem;
       padding: 2px 1rem;
    }

    @keyframes pulseLight {

       70%{
        background-color:${colorVar.digital2};
        color:${colorVar.digital};
       }

        100%{
            background-color:#33c8ce73;
            box-shadow:0px 2px 32px 0 rgb(24 199 193 / 95%)
        }

    }

    `

export const Paragraph= styled.p`

    display: flex;
    flex-direction: column;
    max-width: 600px;           
    height: max-content;
    min-height: 130px;
    margin-top: -34px; 
    padding: 15px;

    background-color:${colorVar.secondary};
    border: ${colorVar.digital} 2px solid;
    border-radius: 10px;
    font-size: 15px;

    .btn-next{
        background-color: transparent;
        color: inherit;
        border:none;
        font-weight: bolder;
        padding-top: .6rem;
        text-align: right;
        max-width: fit-content;
        margin-left: auto;

        img{
            max-width: 20px;
        }

        &:hover{
            filter: drop-shadow(2px 0px 0px red);

            animation-name: bounce-shakeX;
     
            animation-duration: 1s;
     
}

    @keyframes bounce-shakeX{
        0% {transform: translateX(-50%);}
        12% {transform: translateX(50%);}
        24% {transform: translateX(-20%);
            filter: drop-shadow(2px 0px 0px ${colorVar.digital});}
        36% {transform: translateX(20%);}
        48% {transform: translateX(-10%);
            filter: drop-shadow(2px 0px 0px red);}
        60% {transform: translateX(10%);}
        72% {transform: translateX(-5%);}
        84% {transform: translateX(5%);
            filter: drop-shadow(2px 0px 0px ${colorVar.digital});}
        96% {transform: translateX(0%);}
        100% {transform: translateX(0%);
            filter: drop-shadow(2px 0px 0px red);}
    }
    }

    @media (min-width: 768px){
        align-self: self-start;
    }

    @media screen and (max-width: 844px) and (orientation: landscape){
        margin-top: -20px;
    }
    
    `

export const FormAnswer= styled.form`

    display: flex;         
    border: ${colorVar.digital} 2px solid;
    border-radius: 10px;
    background-color:${colorVar.secondary};
    color:${colorVar.digital};
            
    align-items: center;
    margin: 0;

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

    @media screen and (max-width: 844px) and (orientation: landscape){
       font-size: 1rem;
       padding: 2px 1rem;
       margin-top: -4rem;
    }


    `

export const Submit = styled.button`

    display: flex;
    color:${colorVar.digital};
    background-color:${colorVar.digital2};         
    border: ${colorVar.digital} 2px solid;
    border-radius: 10px;
    font-size:20px;
    justify-content: center;
    transition: background-color 1s ease-in-out, color .5s ease-in-out, box-shadow 1.4s ease-in-out;

    &:hover{
        background-color: ${colorVar.digital};
        color:${colorVar.secondary};
        box-shadow: 0 0 16px 8px ${colorVar.digital};
    }
    
    `

export const ClueContainer = styled.aside`

    margin-top: auto;

    @media (min-width: 768px){
        max-width: 100px;
        position: absolute;
        right: -3rem;
        top: 20%;
    }

    @media screen and (max-width: 768px) and (orientation: landscape){
        top: 0;
    }

`


export const ClueButton = styled.img`

    max-width: 100px;
    margin-bottom: 2rem;
    cursor:pointer;
    transition: transform .5s ease-in-out, filter .2s ease-in-out;

    ${(props) => props.result === "yes" ? "filter: saturate(0)" : "" };

    &:hover{
        transform: rotate(15deg) scale(1.3);
        filter: drop-shadow(0 1rem 24px ${colorVar.digital}); 
    }

    @media screen and (max-width: 844px) and (orientation: landscape){
        width: 90px;
        margin-bottom: .6rem;
    }

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