import React from 'react'
import Button from './Button'
import './HeroSection.sass'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-2.mp4" autoPlay loop muted></video>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you wainting for?</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
        </div>
    </div>
  )
}

export default HeroSection