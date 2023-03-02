import styled from "styled-components";
import { colorVar } from "@/styled-components/variables.js"


const handleColorType = (color) => {
    switch (color) {
      case "FF0000":
        return "color: #FFFF; background: #FF0000;";
        break;
      case "39FC58":
        return "color: #FFFF; background: #39FC58;";
        break;
      case "FFC700":
        return "color: #FFFF; background: #FFC700;";
        break;
      case "00B2FF":
        return "color: #FFFF; background: #00B2FF;";
        break;
      case "FFFF":
        return "color: #000; background: #FFFF;";
        break;
      case "BF47F8":
        return "color: #FFFF; background: #BF47F8;";
        break;
      case "0500FF":
        return "color: #FFFF; background: #0500FF;";
        break;
      case "FF8A00":
        return "color: #FFFF; background: #FF8A00;";
        break;
      case "4211BA":
        return "color: #FFFF; background: #4211BA;";
        break;
      case "FFCFCF":
        return "color: #FFFF; background: #FFCFCF;";
        break;
      case "7E3D00":
        return "color: #FFFF; background: #7E3D00;";
        break;
      default:
        return "color: #FFFF; background:  linear-gradient(#7c4200, #2f1701);";
    }
  };




  export const Main_memorize = styled.div`

    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

        section {
            padding: 2rem 0;
        }
        .container {
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
            position: relative;
        }
        .score-container {
            display: flex;
            justify-content: space-between;
            padding: 2rem 1rem;
            border: 3px solid #eee;
            border-radius: 5px;
            align-items: center;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -4px rgba(0, 0, 0, 0.1);
        }  
        .start-btn {
            background-color: #a56d1a;
            color: #eee;
            border-radius: 5px;
            padding: 1rem 2rem;
            border: 0;
            cursor: pointer;
            font-family: 'DynaPuff', cursive;
            font-size: 1.5rem;
            transition: 0.3s all;
        }      
        .start-btn:hover {
            background-color: #008bae;
        }
        .score-board {
            display: flex;
            gap: 4rem;
        }
        .score-board__item {
            display: flex;
            gap: 2rem;
            font-size: 1.25rem;
            color: #eee;
        }
        .board {
            display: grid;
            grid-template-columns: repeat(11,auto);
             grid-template-rows: 0fr; 
            grid-gap: 3%;
            padding: 2rem 1rem;
            border: 3px solid ${colorVar.digital};
            border-radius: 5px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -4px rgba(0, 0, 0, 0.1);
            position: relative;
            width: 100%;
            height: 100%;
        }
        .card {
            position: relative;
            cursor: pointer;
            width: auto;
            height: 150px;
            border-radius: 5px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -4px rgba(0, 0, 0, 0.1);
            animation: bounce-in-fwd 1.1s both;
        }
        /* FLIP */
        .card__front,
        .card__back {
            
            position: absolute;
            border-radius: 5px;
            width: 100%;
            height: 100%;
            background: linear-gradient(0deg,transparent 27% ,#7e3d00 27% 30% ,#ffbc0073 30% 33%,transparent 33% 70%,#7e3d00 70% 73%,#ffbc0073 73% 75%,transparent 75% ),repeating-linear-gradient(36deg,transparent 42%,#7c4200 40% 43%, transparent 40% 45%),linear-gradient(0deg,#7e3d00b8,transparent),linear-gradient(to right,#7c4200,#ffac00,#9b6100);
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            backface-visibility: hidden;
        }
        .card__back {
            font-family: 'DynaPuff', cursive;
            display: grid;
            place-items: center;
            font-size: 2rem;
            text-align: center;
            line-height: 100px;
            background: linear-gradient(#7c4200, #2f1701);
            transform: rotateY(180deg) rotateZ(50deg);
            user-select: none;
            position:relative;
            .simbol {
                position: absolute;
                bottom: -9px;
                color: #ea9b00;
            }


        }
        .card.flipped .card__front {
            transform: rotateY(180deg) rotateZ(50deg);
        } 
        .card.flipped .card__back {
            transform: rotateY(0) rotateZ(0);
        }           
        .match {
            animation: blink-1 1s both;
            animation-delay: 0.5s;
        }
        .finish-display {
            background-color: #00caff1c;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 100;
            display: grid;
            place-content: center;
            padding: 2rem;
        }
        .finish-display p {
            text-align: center;
            font-size: 3rem;
        }
        .finish-display h2 {
            color: white;
            font-size: 3rem;
        }
        .finish-display.hide {
            display: none;
        }


        // animaciones
@keyframes blink-1 {
    0%,
    50%,
    100% {
        opacity: 1;
    }
    25%,
    75% {
        opacity: 0;
    }
}
@keyframes bounce-in-fwd {
  0% {
   
    transform: scale(0);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
 
    transform: scale(1);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {

    transform: scale(0.7);
    animation-timing-function: ease-in;
  }
  72% {
   
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  81% {
    
    transform: scale(0.84);
    animation-timing-function: ease-in;
  }
  89% {

    transform: scale(1);
    animation-timing-function: ease-out;
  }
  95% {

    transform: scale(0.95);
    animation-timing-function: ease-in;
  }
  100% {
 
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}
`

export const MemorizeCard = styled.div`
 
        &.match .card__back {
            
            ${(props) => handleColorType(props.color)};

            .simbol {
                color:#${(props) => props.color};
            }
        }

`