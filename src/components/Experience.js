import React from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Exppoint from './Exppoint';
import LightSpeed from 'react-reveal/LightSpeed';

function Experience(props) {
  return (
    <div ref={props.exp} className='area'>
      <div style={{ display: 'flex', flexDirection: 'column', height: "100%" }}>
        <Fade top>
          <div style={{ position: "relative", top: "18%", left: "40%" }}>Experience</div>
        </Fade>
        <Slide left>
          <div style={{ position: "relative", top: "30%", height: "15%" }}>
            <LightSpeed left>
              <div className='man' style={{ position: "relative", left: "85%", top: "25%" }}>
                <img src='https://cdn-icons-png.flaticon.com/512/76/76810.png' style={{ width: '80px' }}></img>
              </div>
            </LightSpeed>
            <div style={{ width: "100vw", height: "15px", backgroundColor: "black" }}>
            </div>
            <div style={{ position: 'relative', left: "5%", bottom: "150%" }}>
              <Exppoint src={"https://cdn-icons-png.flaticon.com/512/2133/2133147.png"} head={"Chitkara University"} des={"Did college from 2020-2024 in B.E. Computer Science"}></Exppoint>
            </div>
            <div style={{ position: 'relative', left: "35%", bottom: "450%" }}>
              <Exppoint src={"https://internship.thesparksfoundation.info/assests/img/logo.png"} head={"The Sparks Foundation"} des={"Made three contributions in Web Development, and Data Analytics "}></Exppoint>
            </div>
            <div style={{ position: 'relative', left: "75%", bottom: "800%" }}>
              <Exppoint src={"https://lh3.googleusercontent.com/3FsHDogNpsP0h1pUS2ERRcHbBmqxsqlcLd1n6rWiSZ8ZUtODEGsw0p5X2_GAgoOR5Q"} head={"CDK Global"} des={"Selected in Academia Student Intern program, currently a part of CVR team"}></Exppoint>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Experience
