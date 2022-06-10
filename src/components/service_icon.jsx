import React from 'react'

const Service_icon = (props) => {
  return (
    <div className='icon'>
        <div className="block">
            <img src={props.image} alt="" />
        </div>
        <div className="title">
            <p>{props.title}</p>
        </div>
    </div>
  )
}

export default Service_icon