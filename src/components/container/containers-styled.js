import React from "react";
import styled from "styled-components";
import {colorVar}  from '@/styled-components/variables.js';


export const Container = styled.section`

    display: flex;
    justify-content: center;
    text-align: center;
    width: 70%;           
    height: 70vh;
    border: ${colorVar.digital} 2px solid;
    border-radius: 24px;

`
export const Title = styled.div`

    display: flex;
    background-color:${colorVar.digital2};
    width: 150px;           
    height: 150px; 
    border: ${colorVar.digital} 2px solid;
    border-radius: 10px;
    
`
