import React from 'react';
import Fade from 'react-reveal/Fade';
import CompleteIlustration from 'assets/images/Banner.jpg'

export default function Completed() {
  return (
    <Fade>
      <div className='container' style={{ marginBottom:30 }}>
        <div className='row justify-content-center text-center'>
          <div className='col-4'>
            <img
              src={CompleteIlustration}
              className='img-fluid'
              alt='completed checkout hotel'>
            </img>
            <p className='text-gray-500'>
              We will inform you via email. Please wait.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  )
}
