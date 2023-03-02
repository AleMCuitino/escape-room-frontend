import React from 'react'
import { Glitch} from '@/components/animations/animations-styled';


const Error404 = () => {
  return (
    <div className='d-flex vh-100  justify-content-around align-items-center'>
      
      <Glitch data-text="404">404</Glitch>

    </div>
  )
}

export default Error404