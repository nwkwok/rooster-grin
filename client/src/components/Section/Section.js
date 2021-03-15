import React from 'react'
import style from './Section.module.scss'
import Description from './Description/Description'
import Carousel from './Carousel/Carousel'
import {ReactComponent as Expertise} from '../../assets/home-expertise.svg'
import {ReactComponent as Hygiene} from '../../assets/home-hygiene.svg'
import {ReactComponent as Lab} from '../../assets/home-lab.svg'
import {ReactComponent as Retention} from '../../assets/home-retention.svg'


function Section(props) {
    return (
        <>
        <div className={style.container}>
            <div className={style.firstSectionContainer}>
            <Description 
                title={props.title}
                content={props.content}
                link={props.link}
                hasLink={props.hasLink}
                hasStars={props.hasStars}/>
            </div>

        {/* For second section with picture */}
        { props.hasPicture && 
            <div 
                className={style.secondSectionContainerPicture}
                style={{backgroundImage: `url(${props.picture})`}}>
                </div> }

        {/* For second section with icons */}
        { props.hasIcons && 
            <div 
                className={style.secondSectionContainerIcons}>
                <div className={style.iconContainer}>
                    <Expertise />
                    <Hygiene />
                    <Lab />
                    <Retention />
                </div>
                
                
            </div> 
            }

        {/* For second section with Carousel */}                    
        { props.hasCarousel && 
            <div 
                className={style.secondSectionContainerCarousel}>
                    <Carousel />
            </div> }                    
        

        </div>
        </>
        
    )
}


export default Section
