import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import Programming from './Programming';
import Mern from './Mern';
import Machinelearning from './Machinelearning';
import Fade from 'react-reveal/Fade';


function Skills(props) {
  return (
    <div ref={props.skill} className='area'>
      <Fade top>
        <div style={{ width: "97vw" }}>
          <Carousel showStatus={false} infiniteLoop={true}>
            <Programming></Programming>
            <Mern></Mern>
            <Machinelearning></Machinelearning>
          </Carousel>
        </div>
      </Fade>
    </div>

  )
}

export default Skills
