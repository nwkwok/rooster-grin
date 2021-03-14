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
        { props.hasPicture ? 
            <div 
                className={style.secondSectionContainer}
                style={{backgroundImage: `url(${props.picture})`}}>
                </div> :    
            <div 
                className={style.secondSectionContainer}>
                Icons Images</div>
        }

        </div>
        </>
        
    )
}


export default Section
