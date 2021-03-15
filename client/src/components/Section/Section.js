import React from 'react'
import style from './Section.module.scss'
import Description from './Description/Description'

function Section(props) {
    return (
        <>
        <div className={style.container}>
            <div className={style.firstSectionContainer}>
            <Description 
                title={props.title}
                content={props.content}
                link={props.link}
                hasLink={props.hasLink}/>
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
            For Icons</div> }

        {/* For second section with Carousel */}                    
        { props.hasCarousel && 
            <div 
            className={style.secondSectionContainerCarousel}>
            This is for the carousel</div> }                    
        

        </div>
        </>
        
    )
}


export default Section
