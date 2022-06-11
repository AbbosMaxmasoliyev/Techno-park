import React from 'react'

const Block_right = (props) => {
  return (
    <div className='Block_right'>
        <div className="left">
            <div className="neon_button">{props.title}</div>
            <ul>
            {
                props.mapqil.map((index)=>(
                    <li key={index}>{index.info}</li>
                ))
            }
            </ul>
        </div>
        <div className="right">
            {props.image && <img src={props.image}/>}
            { props.video}
        </div>
    </div>
  )
}

export default Block_right
