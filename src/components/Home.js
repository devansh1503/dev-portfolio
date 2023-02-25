import React from 'react'
import comp from './computer.png'
function Home(props) {
    return (
        <div ref={props.home} className='area'>
            <div>
                <div className='typing-demo'>
                    <h1>Hi! I AM DEVANSH ABROL</h1>
                </div>
                <div style={{marginTop:'10px',width:'40vw', fontSize:'18px', fontStyle:'oblique'}}>
                    <p>"I am currently pursuing B.E. Computer Science, at Chitkara University
                        and hold a knack of Machine Learning and Full Stack Web Development. I consider
                        myself as a problem solver, as the feild of Programming revolves around problem
                        solving. As an individual I consider myself as a hard worker, ordered and an organized person.
                        Happy Scrolling!"
                    </p>
                </div>
            </div>
            <div>
                <img className='imgcomp' alt="computer" src={comp}></img>
            </div>
        </div>
    )
}

export default Home
