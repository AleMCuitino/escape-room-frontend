import React, { useEffect }  from 'react'
import Video from '@/assets/video/trip.mp4';
import {VideoStyle} from '@/components/animations/animations-styled';
import { useNavigate, useParams } from 'react-router-dom';




const Trip = () => {

    const navigate = useNavigate();
    const {path}=useParams();


    useEffect(() => {
            setTimeout(() => {
            navigate(`/${path}`);
        }, 4000);
        console.log(1,path);
        
        }, []);
    

    return (

        <div >

        <VideoStyle autoPlay muted >
            
            <source src={Video} type="video/mp4" />
        
        </VideoStyle>

        </div>
 )
}

export default Trip