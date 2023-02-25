import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Fade from 'react-reveal/Fade';
import youtube from './youtube.png'
import heartcare from './heartcare.png'
import planb from './planb.png'
function Projects(props) {
  const visitcss = {
    textDecoration: 'none',
    backgroundColor: 'orange',
    color: 'black',
    padding: '10px 15px',
    margin: '5px',
    borderRadius: '15px'
  }
  return (
    <div ref={props.project} className='area'>
      <Fade top>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column", width: "96%" }}>
          <Carousel showThumbs={false} showStatus={false}>
            <div style={{ margin: "30px", display: "flex" }}>
              <iframe src='https://youtubedevansh.netlify.app' width="36%" style={{ margin: "50px" }}></iframe>
              {/* <img src={youtube} style={{ width: "60%" }}></img> */}
              <div style={{ fontSize: '23px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <p style={{ fontSize: "60px", margin: "10px", color: 'indigo' }}>Youtube But Better!</p>
                <a target='_blank' href='https://youtubedevansh.netlify.app' style={visitcss}>Visit!</a>
                <ul style={{ color: 'white', listStyle: 'square', width: '60%' }}>
                  <li>Built using React JS, and Offical Youtube API</li>
                  <li>Reviewed and used by 30+ peers</li>
                  <li>Watch Ad-free videos, without login</li>
                  <li>Custom category pages for various genre</li>
                </ul>
              </div>
            </div>
            <Fade top>
              <div style={{ margin: "30px", display: "flex" }}>
                <iframe src='https://heartcare247.vercel.app/' width="36%" style={{ margin: "50px" }}></iframe>
                {/* <img src={heartcare} style={{ width: "60%" }}></img> */}
                <div style={{ fontSize: '23px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <p style={{ fontSize: "60px", margin: "10px", color: 'indigo' }}>Heart Care</p>
                  <a target='_blank' href='https://heartcare247.vercel.app/' style={visitcss}>Visit!</a>
                  <ul style={{ color: 'white', listStyle: 'square', width: '60%' }}>
                    <li>Full Stack MERN project</li>
                    <li>Implements Authentication and Authorization using Tokens</li>
                    <li>Custom pages, and data for 3 use cases- Patient, Doctor, and Admin</li>
                    <li>Implements Fitness Tools, and Machine learning APIs</li>
                  </ul>

                </div>
              </div>
            </Fade>
            <Fade top>
              <div style={{ margin: "30px", display: "flex" }}>
                <iframe src='https://plan-b-rosy.vercel.app/' width="37%" style={{ margin: "50px" }}></iframe>
                {/* <img src={planb} style={{ width: "60%"}}></img> */}
                <div style={{ fontSize: '23px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <p style={{ fontSize: "60px", margin: "10px", color: 'indigo' }}>Plan B</p>
                  <a target='_blank' href='https://plan-b-rosy.vercel.app/' style={visitcss}>Visit!</a>
                  <ul style={{ color: 'white', listStyle: 'square', width: '60%' }}>
                    <li>Full Stack MERN project</li>
                    <li>Uses complex Mongodb commands</li>
                    <li>Enter your weekly goals, and subtasks, and you will get a Todo list ready for your next 7 days!</li>
                    <li>Performance tab to know about your Progress, weekly and daily</li>
                    <li>A notes tab wherein you can write something urgently, or even draw</li>
                  </ul>
                </div>
              </div>
            </Fade>
          </Carousel>
        </div>
      </Fade>

    </div>
  )
}

export default Projects
