import React from 'react'

const Block_right = (props) => {
  return (
    <div className='Block_right'>
        <div className="left">
            {props.title && <div className="neon_button">{props.title}</div>}
            {props.mapqil && <ul>
            {
                props.mapqil.map((index)=>(
                    <li key={index}>{index.info}</li>
                ))
            }
            </ul>}
            {props.rasm && <img src={props.rasm}/>}
        </div>
        <div className="right">
            {props.image && <img src={props.image}/>}
            { props.video && <div>{props.video}</div>}
        </div>
    </div>
  )
}

export default Block_right
