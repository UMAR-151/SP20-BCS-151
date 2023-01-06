import React from 'react';
import '../../App.css';
import { Button } from './Button';
import './BodySection.css';

function BodySection() {
  return (
    <div className='body-box'>
       <video src='/videos/video-1.mp4'/>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='body-btns'>
        <Button
          className='btns'
          buttonStyle='btn-outline'
          buttonSize='btn-large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn-primary'
          buttonSize='btn-large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default BodySection;