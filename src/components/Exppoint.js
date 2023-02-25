import React from 'react'

function Exppoint(props) {
    const line={
        backgroundColor:"white",
        height:"10rem",
        width:"9px"
    }
  return (
    <div style={{width:"19%",color:"white", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <img style={{width:"70px"}} src={props.src}></img>
      <div style={line}></div>
      <p style={{fontSize:"35px",borderBottom:"solid 2px white"}}>{props.head}</p>
      <div style={{fontSize:"20px"}}>{props.des}</div>
    </div>
  )
}

export default Exppoint
