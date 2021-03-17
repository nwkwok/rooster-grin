import React from 'react';
import style from './Banner.module.scss';
import Button from '../Utility/Button/Button';
import { Reveal } from 'react-gsap';
import FadeInLeft from '../Animation/FadeInLeft';
import { Link } from 'react-scroll';

function Banner(props) {
  return (
    <div
      className={style.container}
      style={{
        backgroundImage: `url(${props.banner})`,
        backgroundSize: 'cover',
        justifyContent: `${props.align}`,
      }}
    >
      <Reveal repeat>
        <FadeInLeft>
          {props.content ? (
            <div id='second-banner' className={style.descriptionContainerRight}>
              {props.title && <h1 className={style.title}>{props.title}</h1>}
              {props.content && <p>{props.content}</p>}
              <Link to='carousel' smooth={true}>
                <Button text={props.buttonText} button='#ff7219' />
              </Link>
            </div>
          ) : (
            <div id='first-banner' className={style.descriptionContainerLeft}>
              {props.title && <h1 className={style.title}>{props.title}</h1>}
              {props.content && <p>{props.content}</p>}
              <Link to='icons' smooth={true}>
                <Button text={props.buttonText} button='#ff7219' />
              </Link>
            </div>
          )}
        </FadeInLeft>
      </Reveal>
    </div>
  );
}

export default Banner;
