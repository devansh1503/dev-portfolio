import React from 'react'

function Navbar(props) {
    const homescroll = () =>{
        props.home.current?.scrollIntoView({behaviour:'smooth'})
    }
    const skillscroll = () =>{
        props.skill.current?.scrollIntoView({behaviour:'smooth'})
    }
    const projectscroll = () =>{
        props.project.current?.scrollIntoView({behaviour:'smooth'})
    }
    const expscroll = () =>{
        props.exp.current?.scrollIntoView({behaviour:'smooth'})
    }
    const footerscroll = () =>{
        props.footer.current?.scrollIntoView({behaviour:'smooth'})
    }
  return (
    <div className='nav'>
      <div>
        <h1 style={{fontFamily:"Brush Script MT, Brush Script Std, cursive", fontSize:"4rem"}}>My Portfolio</h1>
      </div>
      <div className='links'>
        <ul>
            <li className='lnk' onClick={homescroll}>Home</li>
            <li className='lnk' onClick={skillscroll}>Skills</li>
            <li className='lnk' onClick={projectscroll}>Projects</li>
            <li className='lnk' onClick={expscroll}>Experience</li>
            <li className='lnk' onClick={footerscroll}>Contacts</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
