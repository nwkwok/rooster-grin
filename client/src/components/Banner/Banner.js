import React from 'react'
import style from './Banner.module.scss'

function Banner(props) {
    return (
        <div 
            className={style.container}
            style={{backgroundImage: `url(${props.banner})`}}>
            
        </div>
    )
}

export default Banner
