import styled from "styled-components";
import {colorVar}  from '@/styled-components/variables.js';


export const BubbleCssProvider = styled.div`

--unit: 5vh;
--size: 3rem;
--animation-time: .3s;

.float-button {
  cursor: pointer;
  color:white;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: ${colorVar.digital2};
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;
  display:flex;
  justify-content: center;
  align-items: center;
  transition: transform var(--animation-time);
}
.float-button.pulsed {
  transform: rotate(45deg);
  background: ${colorVar.digital2};
  color: ${colorVar.digital}
}

.circular-menu {
  /*  */
  position: absolute;
  width: 16rem;
  height: 16rem;
  background: ${colorVar.digital2};
  bottom: -5.5rem;
  right: -5.5rem;
  border-radius: 50%;
  z-index: 50;
  opacity: 0;
  transform: scale(0) rotate(-180deg);
  transition: all var(--animation-time);
}
.circular-menu.expand {
  transform: scale(1) rotate(0);
  opacity: 1;
}
.circular-menu ul {
  /*  */
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 1.5rem;
}
.circular-menu a {
  text-decoration: none;
  color: black;
  display: block;
  color: #fff;
}
.circular-menu li {
  position: absolute;
  width: 2rem;
  top: 2rem;
  left: calc(50% - 1rem);
  text-align: center;
  transform-origin: center 6rem;
}

/*rotar los elementos dentro del menu circular */
.circular-menu li:nth-child(2) {
  transform: rotate(-30deg);
}
.circular-menu li:nth-child(2) a {
  transform: rotate(30deg);
}

.circular-menu li:nth-child(3) {
  transform: rotate(-60deg);
}
.circular-menu li:nth-child(3) a {
  transform: rotate(60deg);
}

.circular-menu li:nth-child(4) {
  transform: rotate(-90deg);
}
.circular-menu li:nth-child(4) a {
  transform: rotate(90deg);
}
`

