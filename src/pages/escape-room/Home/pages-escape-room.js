import {colorVar}  from '@/styled-components/variables.js';
import styled ,{keyframes}  from "styled-components";


export const HomeOrange= styled.section`

    background-color: ${colorVar.primary};
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
        max-width: 300px;
    }
    `

        //ANIMACION// 
const rotate360= keyframes`

from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;


export const Loading= styled.img`

width: 200px;
height: 200px;
transform-origin: center;
animation: ${rotate360} 3.5s linear infinite;

    `
const effect = keyframes`
0% {
  clip: rect(71px, 9999px, 50px, 0);
}
5% {
  clip: rect(33px, 9999px, 89px, 0);
}
10% {
  clip: rect(26px, 9999px, 20px, 0);
}
15% {
  clip: rect(31px, 9999px, 13px, 0);
}
20% {
  clip: rect(57px, 9999px, 71px, 0);
}
25% {
  clip: rect(64px, 9999px, 74px, 0);
}
30% {
  clip: rect(31px, 9999px, 50px, 0);
}
35% {
  clip: rect(88px, 9999px, 17px, 0);
}
40% {
  clip: rect(82px, 9999px, 98px, 0);
}
45% {
  clip: rect(39px, 9999px, 44px, 0);
}
50% {
  clip: rect(10px, 9999px, 14px, 0);
}
55% {
  clip: rect(95px, 9999px, 11px, 0);
}
60% {
  clip: rect(62px, 9999px, 51px, 0);
}
65% {
  clip: rect(54px, 9999px, 12px, 0);
}
70% {
  clip: rect(92px, 9999px, 36px, 0);
}
75% {
  clip: rect(94px, 9999px, 82px, 0);
}
80% {
  clip: rect(37px, 9999px, 58px, 0);
}
85% {
  clip: rect(78px, 9999px, 75px, 0);
}
90% {
  clip: rect(25px, 9999px, 5px, 0);
}
95% {
  clip: rect(51px, 9999px, 100px, 0);
}
100% {
  clip: rect(73px, 9999px, 65px, 0);
}`

export const Glit= styled.h1` 

  position: relative;
  width: 100%;
  margin: 0 auto;
  color:#333;
  font-size: 100px;
  font-family: "Exo", sans-serif;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  transform: scale3d(2, 2, 2);

&::before, &::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background: #333;
  color: #333;
  clip: rect(500, 2200px, 200, 500);
}
&::before {
  left: 7px;
  text-shadow: 5px 0 #333;
  animation: ${effect} 3s infinite linear alternate-reverse;
}
&::after {
  left: 3px;
  text-shadow: -5px 0 #333;
  animation: ${effect} 2s infinite linear alternate-reverse;
}
`