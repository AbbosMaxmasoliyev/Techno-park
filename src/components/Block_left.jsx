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
            {props.video2 && <div>{props.video2}</div>}
           {props.title && <div className="neon_button">{props.title}</div> } 
            {props.mapqil && <ul>
            {
                props.mapqil.map((index,item)=>(
                    <li key={item.toString()}>{index.info}</li>
                ))
            }
            </ul>}
            {props.image2 && <img src={props.image2} className="yutub"/>}
        </div>
    </div>
    </div>
  )
}

export default Block_left
