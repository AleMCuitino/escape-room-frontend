import React, {useState, useEffect} from 'react';
import { HomeOrange , Loading} from './pages-escape-room.js';
import Factoria from '@/assets/logotype/logoblanco.svg';
import { Glit} from '@/pages/escape-room/Home/pages-escape-room.js';
import Load from '@/assets/buttons/Streaming.svg';
import Error404 from '@/components/animations/Error404';



const HomeLoading = () => {

  const [color, setColor] = useState('#FF4700');
  const [showAnimation, setShowAnimation] = useState(false);
 

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor('#020100');
    }, 5000);

    const timer2 = setTimeout(() => {
      setShowAnimation(true);
    }, 7000);


    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
     
    };
  }, []);


  return (
<>

  {showAnimation ? (
        <Error404/>
      ) : (
        <HomeOrange style={{ backgroundColor: color }}>
          <img className='col-md-3' src={Factoria} alt="logotype" />
          <Loading src={Load} alt="load" /> 
        </HomeOrange>
      )}
    
    </>
  )
}

export default HomeLoading