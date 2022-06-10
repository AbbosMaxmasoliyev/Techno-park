import React from 'react'

const Expertise = (props) => {
  return (
    <div className='expertise'>
        <div className="block">
          <p className='info'>{props.info}</p>
          <p className='name'>{props.name}</p>
          <p className='role'>{props.role}</p>
          <img src={props.image_pic} className="expert_image" />
        </div>
    </div>
  )
}

export default Expertise