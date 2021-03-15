import React from 'react'
import style from './Section.module.scss'
import Description from './Description/Description'
import Carousel from './Carousel/Carousel'
import {ReactComponent as Expertise} from '../../assets/home-expertise.svg'
import {ReactComponent as Hygiene} from '../../assets/home-hygiene.svg'
import {ReactComponent as Lab} from '../../assets/home-lab.svg'
import {ReactComponent as Retention} from '../../assets/home-retention.svg'
import { Reveal, Tween } from 'react-gsap';
import FadeInRight from '../Animation/FadeInRight'
import FadeInLeft from '../Animation/FadeInLeft'



function Section(props) {
    return (
        <>
        <div className={style.container}>
        <Reveal repeat>
        <FadeInLeft>
            <div className={style.firstSectionContainer}>
            <Description 
                title={props.title}
                content={props.content}
                link={props.link}
                hasLink={props.hasLink}
                hasStars={props.hasStars}/>
            </div>
        </FadeInLeft>
        </Reveal>

        {/* For second section with picture */}
        { props.hasPicture && 
               <Reveal repeat>
               <FadeInRight>
            <div 
                className={style.secondSectionContainerPicture}
                style={{backgroundImage: `url(${props.picture})`}}>
                </div> 
                </FadeInRight>
                </Reveal>}

        {/* For second section with icons */}
        { props.hasIcons && 
            <div 
                className={style.secondSectionContainerIcons}>
                <div className={style.iconContainer}>
                <Reveal repeat>
                <Tween from={{x:'-50px', rotation: 15}} to={{ x: '0px', rotation:0 }} stagger={0.2} ease="elastic.out(0.2, 0.1)">
                    <Expertise />
                    <Hygiene />
                    <Lab />
                    <Retention />
                </Tween>
                </Reveal>
                </div>
                
                
            </div> 
            }

        {/* For second section with Carousel */}                    
        { props.hasCarousel && 
            <Reveal repeat>
            <FadeInRight>
                <div 
                    className={style.secondSectionContainerCarousel}>
                        <Carousel />
                </div> 
            </FadeInRight>
            </Reveal>}                    
        

        </div>
        </>
        
    )
}


export default Section
