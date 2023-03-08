import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { useLocalStorage } from '../../hooks/useLocalStorage';


const CountDown = () => {
    
    const navigate = useNavigate();

    const Ref = useRef(null);

    const [timeLeft, setTimeLeft] = useLocalStorage('timeLeft', '');

    const [timer, setTimer] = useState('00:00');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);

        return {
            total, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {

            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
                )

        }
    }
    useEffect(() => {
        if(timer == '00:00'){
            navigate('/final')
        }
    }, [timer])
    
    const clearTimer = (e) => {

        setTimer('59:59');

        // If you try to remove this line the 
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
            
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        if (timeLeft) {
            let deadline = new Date(timeLeft);
            deadline.setSeconds(deadline.getSeconds() + 3600);
            return deadline;
        }
        else{
            let deadline = new Date();
            setTimeLeft(deadline);
            deadline.setSeconds(deadline.getSeconds() + 3600);
            return deadline;
        }
    }

    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible

    // We put empty array to act as componentDid
    // mount only

    useEffect(() => {
        clearTimer(getDeadTime());
        
    }, []);

    return (
        <div className='text-end mb-4 mb-md-0'>
            <h2>{timer}</h2>
        </div>
    )
}

export default CountDown