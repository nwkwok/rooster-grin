import React from 'react'
import Slider from 'infinite-react-carousel'
import style from './Carousel.module.scss'

function Carousel() {
    return (
    <>
    <div className={style.carouselContainer}>
        <Slider 
            dots 
            centerMode
            >
            <div className={style.carouselComment}>
                <h3 className={style.commentTitle}>
                    John Doe 03/15/2021
                </h3>
                <p className={style.comment}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio tempore rem obcaecati quo dolore consequuntur quae magni, velit odit repellat ab sapiente iusto distinctio a recusandae fuga voluptas labore qui.
                </p>
            </div>
            <div className={style.carouselComment}>
                <h3 className={style.commentTitle}>
                    Jane Doe 11/01/2020
                </h3>
                <p className={style.comment}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, ea maxime! Nihil dolore, a assumenda voluptatem consectetur eos minus. Perspiciatis magni nam aspernatur odio aperiam corporis beatae deserunt? Modi, eos.
                </p>
            </div>
            <div className={style.carouselComment}>
                <h3 className={style.commentTitle}>
                    Nick Kwok 09/10/2020
                </h3>
                <p className={style.comment}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum distinctio omnis, sapiente et laborum sunt voluptas dolor a rerum? Aperiam molestias eaque iure enim sequi. Quaerat possimus deleniti repellendus!
                </p>
            </div>
        </Slider>
    </div>
    </>
    )
}

export default Carousel
