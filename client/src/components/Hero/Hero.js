import React from 'react'
import Button from '../Utility/Button/Button'
import style from './Hero.module.scss'
import RGLogo from '../../assets/logo-white.svg'

function Hero() {
    return (
        <div className={style.container}>
            <img className={style.RGLogo} src={RGLogo} alt="RG-Logo"/>
            <div className={style.HeroTitleContainer}>
                <h1 className={style.first}>WELCOME TO</h1>
                <h2 className={style.second}>Rooster Grin</h2>
                <Button 
                    text='Hero Button'
                    button='#AD5FD1'/>
            </div>
           
          
        </div>
    )
}

export default Hero