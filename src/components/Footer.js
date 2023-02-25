import React from 'react'
import Fade from 'react-reveal/Fade';

function Footer(props) {
  return (
    <div style={{ flexDirection: "column" }} ref={props.footer} className='area'>
      <Fade top>
        <p>Let's Connect!</p>
        <div className='con-icon'>
          <a target='_blank' href='https://www.linkedin.com/in/devansh-abrol-46463b201/'><img src='https://cdn.icon-icons.com/icons2/2248/PNG/512/linkedin_icon_135436.png'></img></a>
          <a target='_blank' href='https://www.facebook.com/devansh.abrol.921/'><img src='https://cdn-icons-png.flaticon.com/512/59/59439.png'></img></a>
          <a target='_blank' href='https://github.com/devansh1503'><img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'></img></a>
        </div>
        {/* <div className='foot' style={{color:"black", fontStyle:"oblique", display:"flex", justifyContent:"space-around"}}>
        <p style={{fontSize:"21px", marginRight:"25px"}}>Gmail:guyawsm@gmail.com</p>
        <p style={{fontSize:"21px",  marginRight:"25px"}}>From: Punjab, India</p>
        <p style={{fontSize:"21px"}}>Mobile: +91-8558906689</p>
      </div> */}
      </Fade>
    </div>

  )
}

export default Footer
