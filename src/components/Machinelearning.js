import React from 'react'

function Machinelearning() {
    const stl = {
        width:"100%",
        display:"flex",
        justifyContent:"space-around",
        alignItem:"center",
        marginTop:"50px"
    }
    return (
        <div className='skillSection' style={{ height: "70vh" }}>
            <p>Machine Learning</p>
            <div className='skillarea' style={stl}>
                <div className='skillitem'>
                    <img style={{ width: '200px' }} src='https://user-images.githubusercontent.com/13250741/64669187-33b55380-d47e-11e9-8bbf-c02a9d42f9a7.png'></img>
                    <p style={{ fontSize: '40px' }}>Tensorflow</p>
                </div>
                <div className='skillitem'>
                    <img style={{ width: '200px' }} src='https://cdn.worldvectorlogo.com/logos/numpy-1.svg'></img>
                    <p style={{ fontSize: '40px' }}>Numpy</p>
                </div>
                <div className='skillitem'>
                    <img style={{ width: '200px' }} src='https://cdn.filepicker.io/api/file/jZDILlufSOSDOkuJTZ7J'></img>
                    <p style={{ fontSize: '40px' }}>Tableau</p>
                </div>
            </div>
        </div>
    )
}

export default Machinelearning
