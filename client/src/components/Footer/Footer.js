import React from 'react'
import style from './Footer.module.scss'
import { ReactComponent as FB} from '../../assets/facebook.svg'
import { ReactComponent as IG} from '../../assets/instagram.svg'

function Footer() {
    return (
        <>
        <div className={style.container}>
            Follow us:
            <div className={style.socialMedia}>
                <div className={style.instagram}>
                    <a href="#">
                    <IG />
                    </a>
                  
                </div>
                <div className={style.facebook}>
                    <a href="">
                    <FB />
                    </a>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
