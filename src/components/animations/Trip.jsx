import React from 'react'
import Video from '@/assets/video/trip.mp4';
import {VideoStyle} from '@/components/animations/animations-styled';

const Trip = () => {
    return (

        <div >


        <VideoStyle autoPlay muted >
            
            <source src={Video} type="video/mp4" />
        
        </VideoStyle>

 
        

        </div>
 )
}

export default Trip