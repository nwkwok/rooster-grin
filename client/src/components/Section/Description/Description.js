import React from 'react'
import style from './Description.module.scss'
import Button from '../../Utility/Button/Button'

function Description(props) {
    return (
        <div className={style.container}>
            <h1>{ props.title }</h1>
            <p>{ props.content} </p>
            {props.hasLink &&
                <a href='{props.link}'> <span>{'> '}</span> More information </a> 
            }
        </div>
    )
}

export default Description
