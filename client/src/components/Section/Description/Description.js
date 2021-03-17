import React from 'react'
import style from './Description.module.scss'
import Stars from '../../../assets/stars.png'

function Description(props) {
    return (
        <div className={style.container}>
            <h1>{ props.title }</h1>
            <p>{ props.content} </p>
            {props.hasLink &&
                <a href={props.link}> <span>{'> '}</span> More information </a> 
            }
            {props.hasStars && 
                <img 
                    src={Stars} 
                    alt="stars"
                    className={style.stars} />}
        </div>
    )
}

export default Description
