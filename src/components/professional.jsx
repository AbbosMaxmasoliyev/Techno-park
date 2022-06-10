import React from 'react'
import Sxema from "../images/pro.svg"
import White_fon from "../images/oqfon.png"

const Professional = () => {
  return (
    <div className='Professional'>
        <marquee behavior="right" direction="row">
            <img src={Sxema} alt=""  className='pro'/>
        </marquee>
        <img src={White_fon} alt="" />
    </div>
  )
}

export default Professional