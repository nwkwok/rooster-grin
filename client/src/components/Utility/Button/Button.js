import React from 'react'
import style from './Button.module.scss'

function Button(props) {
    return (
            <div className={style.button} style={{backgroundColor: props.button}}>
                {props.text}
            </div>
    )
}

export default Button
