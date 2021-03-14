import React from 'react'
import style from './Section.module.scss'
import Description from './Description/Description'
import Picture from './Picture/Picture'

function Section() {
    return (
        <div className={style.container}>
            Section
            <div>
                <Description />
            </div>
            <div>
                <Picture />
            </div>
        </div>
        
    )
}


export default Section
