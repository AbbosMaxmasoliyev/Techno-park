import React from 'react'


const Banner2 = (props) => {
  return (
    <div className='banner2'>
        <div className="left">
            <div className="neon_button">
                <p>{props.neon}</p>
            </div>
            <ul>
            {
                props.mapqil.map((index,item)=>(
                    <li key={item.toString()}>{index.info}</li>
                ))
            }
            </ul>
        </div>
        <div className="right">
            <div className='rightblock'>{props.bnma}</div>
        </div>
    </div>
  )
}

export default Banner2