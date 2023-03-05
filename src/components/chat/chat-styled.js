import styled from "styled-components";
import {colorVar}  from '@/styled-components/variables.js';

export const CssChatProvider = styled.div`
    
    background-color:  ${colorVar.digital2};
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    backdrop-filter: blur(5px);
    border: 1px solid rgb(0 255 255 / 18%);
    box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
    margin-top:1rem;

    .chat-window{
        overflow: auto;
        max-height: 4rem;
        flex-grow: 1;
    }

    input{
        
        color: ${colorVar.digital};
        background-color: ${colorVar.secondary};
        border: 1px solid ${colorVar.digital};
        padding-left: 1rem;
        border-radius: 6px;
        :focus { outline: none; } 
        ::placeholder{
            color: ${colorVar.digital};
        }
       animation: blink .5s ease-out infinite alternate;
      
    }
    button{
        background: ${colorVar.digital}
       } 

    @keyframes blink {
        
        75%{
            color: ${colorVar.digital};
        }

        100%{
          
            color: ${colorVar.secondary};
        }
        
    }

`