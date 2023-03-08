
import styled, {keyframes} from "styled-components";
import {colorVar}  from '../../styled-components/variables.js';



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

const pulse = keyframes`
pulse {
  to {
    transform: scale(0.8);
    opacity: 0.5;
  }
}`

const rotationBack = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }` 


export const Glitch= styled.h1` 

  position: relative;
  width: 100%;
  margin: 0 auto;
  color: #fff;
  font-size: 80px;
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
  color: #fff;
  clip: rect(500, 2200px, 200, 500);
}
&::before {
  left: 7px;
  text-shadow: 5px 0 #33C8CE;
  animation: ${effect} 3s infinite linear alternate-reverse;
}
&::after {
  left: 3px;
  text-shadow: -5px 0 #FF4700;
  animation: ${effect} 2s infinite linear alternate-reverse;
}
`

export const Code= styled.span`

    color: #fff;
    font-family: Consolas, Menlo, Monaco, monospace;
    font-weight: bold;
    font-size: 78px;
    opacity: 0.8;
  
 &:before {
    content: "{";
    display: inline-block;
    animation: ${pulse} 0.4s alternate infinite ease-in-out;
  }
  &:after {
    content: "}";
    display: inline-block;
    animation: ${pulse} 0.4s 0.3s alternate infinite ease-in-out;
  }
      `

export const Load= styled.span`

width: 60px;
height: 40px;
position: relative;
display: inline-block;
--base-color: #263238; /*use your base color*/

&::before {
content: '';  
left: 0;
top: 0;
position: absolute;
width: 36px;
height: 36px;
border-radius: 50%;
background-color: #FFF;
background-image: radial-gradient(circle 8px at 18px 18px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 18px 0px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 0px 18px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 36px 18px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 18px 36px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 5px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 30px 30px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 5px 30px, var(--base-color) 100%, transparent 0), radial-gradient(circle 4px at 5px 5px, var(--base-color) 100%, transparent 0);
background-repeat: no-repeat;
box-sizing: border-box;
animation: ${rotationBack} 3s linear infinite;
}
&::after {
content: '';  
left: 35px;
top: 15px;
position: absolute;
width: 24px;
height: 24px;
border-radius: 50%;
background-color: #FFF;
background-image: radial-gradient(circle 5px at 12px 12px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 12px 0px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 0px 12px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 24px 12px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 12px 24px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 3px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 20px 20px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 3px 20px, var(--base-color) 100%, transparent 0), radial-gradient(circle 2.5px at 3px 3px, var(--base-color) 100%, transparent 0);
background-repeat: no-repeat;
box-sizing: border-box;
animation: ${rotationBack}  4s linear infinite reverse;
}

`
export const ContainerBg = styled.div`
    background-color: ${colorVar.secondary};
    height: 100vh;
    width: 100%;
    display:flex;
    align-items:center;

`


export const VideoStyle = styled.video`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

`
export const typing =keyframes`
 0%
  {
    width: 0;
  }
  100% {
    width: 100%;
  }
`

export const blink=keyframes`
50% {
    border-color: transparent;
  }
`

export const ContainerText = styled.span`

  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  place-items: center;
  text-align: center;
  background-color: ${colorVar.secondary};
  color:white;


    h3 {
    width: 0;
    overflow: hidden;
    white-space: normal;
    font-size: 3rem;
    border-right: 0.05rem solid white;
    animation: ${typing} 3s steps(50) 0.4s 1 normal both, ${blink} 1s steps(1) infinite;
  }

  .text-final{
    max-width: 600px;
  }
  

`





