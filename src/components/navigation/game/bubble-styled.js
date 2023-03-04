import styled from "styled-components";
import {colorVar}  from '@/styled-components/variables.js';


export const BubbleCssProvider = styled.div`

--unit: 5vh;
--size: 3rem;
--animation-time: .3s;

.smartphone-viewport {
  height: calc(var(--unit) * 16);
  width: calc(var(--unit) * 9);
  background: url(https://static.pexels.com/photos/310386/pexels-photo-310386.jpeg) center center/cover;
  margin: auto;
  box-shadow: 0 20px 20px -10px #000;
  position: relative;
  overflow: hidden;
}
.smartphone-viewport::before {
  content: "Hola Mundo";
  position: absolute;
  top: 45%;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 2em;
  z-index: 100;
  font-family: "Open Sans";
}
.smartphone-viewport::after {
  /*  */
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
}

.float-button {
  /*  */
  cursor: pointer;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: ${colorVar.digital};
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;
  transition: transform var(--animation-time);
}
.float-button.pulsed {
  transform: rotate(45deg);
  background: ${colorVar.digital2};
}
.float-button::before, .float-button::after {
  /*  */
  position: absolute;
  width: 40%;
  height: 4%;
  content: "";
  top: 49%;
  left: 30%;
  background: #fff;
}
.float-button::after {
  transform: rotate(90deg);
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

