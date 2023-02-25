import React from 'react'

function Programming() {
    const stl = {
        width:"100%",
        display:"flex",
        justifyContent:"space-around",
        alignItem:"center",
        marginTop:"50px"
    }
  return (
    <div className='skillSection' style={{height:"70vh"}}>
          <p>Programming Languages</p>
          <div className='skillarea' style={stl}>
            <div className='skillitem'>
              <img style={{width:'200px'}} src='https://cdn-icons-png.flaticon.com/512/226/226777.png'></img>
              <p style={{ fontSize: '40px' }}>Java</p>
            </div>

            <div className='skillitem'>
              <img style={{width:'200px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'></img>
              <p style={{ fontSize: '40px' }}>Python</p>
            </div>

            <div className='skillitem'>
              <img style={{width:'200px'}} src='https://cdn-icons-png.flaticon.com/512/136/136530.png'></img>
              <p style={{ fontSize: '40px' }}>Javascript</p>
            </div>
          </div>
        </div>
  )
}

export default Programming
