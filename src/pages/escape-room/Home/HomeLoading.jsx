import React, {useState, useEffect} from 'react';
import { HomeOrange } from './pages-escape-room';
import Factoria from '@/assets/logotype/factoria.svg';
import { Glitch} from '@/components/animations/animations-styled';
import ContainerMain from '../../../components/container/ContainerMain';


const HomeLoading = () => {

  const [color, setColor] = useState('#FF4700');
  const [animation, setAnimation] = useState('');
  const [page, setPage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor('#020100');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer2 = setTimeout(() => {
      setAnimation(<Glitch data-text="factoria"></Glitch>);
    }, 5000);
    return () => clearTimeout(timer2);
  }, []);

  useEffect(() => {
    const timer3 = setTimeout(() => {
      setPage(<ContainerMain/>);
    }, 10000);
    return () => clearTimeout(timer3);
  }, []);

  return (
    <HomeOrange style={{ backgroundColor: color }}>
      {/* <img src={Factoria} alt="logotype" /> */}

      <div>{animation}</div>
      {/* <div>{page}</div> */}
      
    </HomeOrange>
  )
}

export default HomeLoading