import React from 'react'
import '../app.css'
import { Button } from './Button'
import './HeaderHome.css'


function HeaderHome() {
    return (
        <div className='hero-container'>
            <h1>Every person needs a place to<br/> fall in love<br/>eat<br/>and get excited</h1>

            <div className='hero-btns'>
                <Button
                    path='/about-us'
                    className='btns'
                    buttonStyle='btn-outline'
                    buttonSize='btn-large'>About Me
                </Button>
            </div>
        </div>
    )
}

export default HeaderHome




// <video src='/video/first.mp4' autoPlay loop muted></video>
// <Button
// className='btns'
// buttonStyle='btn-primary'
// buttonSize='btn-large'>Watch trailer <i className='far fa-play-circle' />
// </Button>