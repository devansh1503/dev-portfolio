import React from 'react'

function Mern() {
    const stl = {
        width:"100%",
        display:"flex",
        justifyContent:"space-around",
        alignItem:"center",
        marginTop:"50px"
    }
    return (
        <div className='skillSection'>
            <p>MERN Stack</p>
            <div className='skillarea' style={stl}>
                <div className='skillitem'>
                    <img style={{width:'200px'}} src='https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png'></img>
                    <p style={{ fontSize: '40px' }}>Mongo DB</p>
                </div>

                <div className='skillitem'>
                    <img style={{width:'200px'}} src='https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png'></img>
                    <p style={{ fontSize: '40px' }}>Express JS</p>
                </div>

                <div className='skillitem'>
                    <img style={{width:'200px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'></img>
                    <p style={{ fontSize: '40px' }}>React JS</p>
                </div>
                <div className='skillitem'>
                    <img style={{width:'200px'}} src='https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png'></img>
                    <p style={{ fontSize: '40px' }}>Node JS</p>
                </div>
            </div>
        </div>
    )
}

export default Mern
