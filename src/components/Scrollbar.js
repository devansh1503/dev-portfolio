import React from 'react'

function Scrollbar(props) {
    const ele = [props.home, props.skill, props.project, props.exp, props.footer]
    var id = props.id
    const smoothScroll = () =>{
        const idx = (id+1)%5
        props.setId(idx)
        const pp = ele[idx]
        pp.current?.scrollIntoView({behavior:'smooth'})
    }
  return (
    <div>
      <div onClick={smoothScroll} className='scroll'><img alt='scroll' style={{width:'50px'}} src='https://www.freeiconspng.com/uploads/scroll-icon-23.png'></img></div>
    </div>
  )
}

export default Scrollbar
