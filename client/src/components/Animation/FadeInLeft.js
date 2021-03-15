import React from 'react'
import { Tween } from 'react-gsap';


function FadeInLeft({children}) {
    return (
            <Tween
              from={{ opacity: 0 }}
              ease="back.out(1.4)"
            >
              {children}
            </Tween>
          );
}

export default FadeInLeft
