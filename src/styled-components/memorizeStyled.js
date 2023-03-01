import styled from "styled-components";


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
      case "FF3D00":
        return "color: #FFFF; background: #FF3D00;";
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
        return "color: #FFFF; background:  #006c66;";
    }
  };




  export const Main_memorize = styled.div`



    font-family: 'DynaPuff', cursive;
    background: linear-gradient(to left, #2193b0, #6dd5ed);
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
            /* grid-template-rows: 0fr; */
            grid-gap: 3%;
            padding: 2rem 1rem;
            border: 3px solid #eee;
            border-radius: 5px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                0 4px 6px -4px rgba(0, 0, 0, 0.1);
            position: relative;
           /*  min-height: 770px; */
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
            background: linear-gradient(to right, #96deda, #50c9c3);
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            backface-visibility: hidden;
        }
        .card__back {
            display: grid;
            place-items: center;
            font-size: 2rem;
            text-align: center;
            line-height: 100px;
            background: #006c66;
            transform: rotateY(180deg) rotateZ(50deg);
            user-select: none;


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
            background-color: #18677b;
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
        }

`