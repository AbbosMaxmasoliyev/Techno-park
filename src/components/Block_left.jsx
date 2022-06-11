import React from 'react'

const Block_left = (props) => {
  return (
    <div>
        <div className='Block_left'>
        <div className="left">
            {props.image && <img src={props.image}/>}
            { props.video}
        </div>
        <div className="right">
            <div className="neon_button">{props.title}</div>
            <ul>
            {
                props.mapqil.map((index)=>(
                    <li key={index}>{index.info}</li>
                ))
            }
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Block_left
