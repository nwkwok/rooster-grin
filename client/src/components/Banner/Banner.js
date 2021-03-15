import React from 'react'
import style from './Banner.module.scss'
import Button from '../Utility/Button/Button'
import { Reveal } from 'react-gsap';
import FadeInLeft from '../Animation/FadeInLeft'


function Banner(props) {

    return (
        <div 
            className={style.container}
            style={{
                backgroundImage: `url(${props.banner})`,
                justifyContent: `${props.align}`
                }}>
            <Reveal repeat>
                <FadeInLeft>
                    <div className={style.descriptionContainer}>
                    {props.title && <h1 className={style.title}>{props.title}</h1>}
                    {props.content && <p>{props.content}</p>}
                    <Button 
                        text={props.buttonText}
                        button='#ff7219'/>
                     </div>
                </FadeInLeft>
            </Reveal>

        </div>
    )
}

export default Banner
