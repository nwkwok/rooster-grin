import React from 'react'
import Button from '../Utility/Button/Button'
import style from './Hero.module.scss'
import RGLogo from '../../assets/logo-white.svg'
import { Reveal, Tween } from 'react-gsap';
import {Link} from 'react-scroll';


function Hero() {
    return (
        <div id="hero" className={style.container}>
            <img className={style.RGLogo} src={RGLogo} alt="RG-Logo"/>
            <Reveal repeat>
            <Tween from={{ opacity: 0 }} duration={2}>
            <div className={style.HeroTitleContainer}>
                <h1 className={style.first}>WELCOME TO</h1>
                <h2 className={style.second}>Rooster Grin</h2>
                <Link to='picture' smooth={true}>
                <Button 
                    text='Hero Button'
                    button='#AD5FD1'/>
                </Link>
            </div>
            </Tween>
            </Reveal>
           
          
        </div>
    )
}

export default Hero