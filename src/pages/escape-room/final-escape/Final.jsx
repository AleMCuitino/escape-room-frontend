import React, {useState, useEffect} from'react'
import { ContainerText } from '../../../components/animations/animations-styled'
import {Submit} from '@/styled-components/containers-styled';
import { Link } from 'react-router-dom';
import { confetti } from "https://cdn.jsdelivr.net/npm/tsparticles-confetti/+esm";


const Final = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [repeatCount, setRepeatCount] = useState(0);

  const colors = ["#53ff09", "#ffffff","#fd7f00","#f700b9","#00e5ff","#fbef44f2"];
  const end = Date.now() + 20 * 5000;

  const run = () => {
    setIsRunning(true);
    (function frame() {
      confetti({
        particleCount: 200,
        angle: 60,
        spread: 100,
        origin: { x: 0 },
        colors: colors,
        
      });

      confetti({
        particleCount: 200,
        angle: 120,
        spread: 100,
        origin: { x: 1 },
        colors: colors,
        
      });
      if (Date.now() < end && isRunning) {
        requestAnimationFrame(frame);
      } else {
        setIsRunning(false);
        setRepeatCount(repeatCount + 1);
      }
    })();
  };

  useEffect(() => {
    run();
  }, []);

  useEffect(() => {
    if (repeatCount < 2) {
      run();
    }
  }, [repeatCount]);
  useEffect(() => {
    if (repeatCount < 2) {
      setTimeout(() => {
        run();
      }, 2000); 
    }
  }, [repeatCount]);
  

  return (
    
    
     <div>
      <ContainerText>
        <p>¡Felicidades! </p>
        <p>¡Habéis desbloqueado la máquina y regresado al presente! El dispositivo os informa que no hay hack que remediar, quien estaba detrás de este extraño viaje era Factoría F5, que quería poner a prueba vuestras capacidades!</p>
        <p>Esperamos que hayáis disfrutado la experiencia y ¡gracias por participar!</p>

        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSf46_HCcQi7L0jyGAnQ7hxvVekzY55hd0c3KoXlNheb_GJ6vQ/viewform?embedded=true">
          <Submit> Comparte tu experiencia </Submit>
        </Link>

      </ContainerText>
    </div>
  )
}

export default Final