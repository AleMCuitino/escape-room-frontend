import React from 'react'
import { Glitch, ContainerBg} from '@/components/animations/animations-styled';
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationDone(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (animationDone) {
      navigate('/waiting');
    }
  }, [animationDone]);

  
  return (
    <div>
      {!animationDone && (
        <ContainerBg>
          <Glitch data-text="404">404</Glitch>
        </ContainerBg>
      )}
    </div>
  );
};

export default Error404;