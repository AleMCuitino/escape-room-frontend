import styled from "styled-components";

import {colorVar}  from '@/styled-components/variables.js';

export const Slider = styled.div`
  width: 200px;
  text-align: center;
  overflow: hidden;
  margin: auto;

.slides {
  display: flex;
  
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}
.slides::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.slides::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
.slides::-webkit-scrollbar-track {
  background: transparent;
}
.slides > div {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 200px;
  height: 300px;
  margin-right: 1rem;
  border-radius: 10px;
  
  transform-origin: center center;
  transform: scale(1);
  transition: transform 0.5s;
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
}
.slides > div:target {
/*   transform: scale(0.8); */
}
.author-info {
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 0.75rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
}
.author-info a {
  color: white;
}
img {
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

 > a {
  display: inline-flex;
  width: 1.5rem;
  height: 1.5rem;
  color: ${colorVar.digital};
  background: ${colorVar.digital2};
  backdrop-filter: blur(5px);
    border: 1px solid rgb(0 255 255 / 18%);
    box-shadow: 0 8px 32px 0 rgb(29 119 127 / 37%);
  text-decoration: none;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 0 0.5rem 0;
  position: relative;
transition: background 0.2s ease-in-out, color 0.2s ease-in;
  :not(:last-child){
    margin-right: .5rem;
  }
  :hover{
    background: ${colorVar.digital};
    color:${colorVar.secondary};
  }

}
 > a:active {
  top: 1px;
}
> a:focus {
  background: #000;
}

@media (min-width: 400px) {
    
    width: 100%;
}

`    