import React from 'react';

// images
import fenix from "../images/partnerslogo/fenix.png"
import trend from "../images/partnerslogo/trend.png"
import samdu from "../images/partnerslogo/samdu.png"
import beeline from "../images/partnerslogo/beeline.png"
import prof from "../images/partnerslogo/prof.png"
import koica from "../images/partnerslogo/koica.png"


let items = [
    <img src={fenix}/> ,
    <img src={trend}/> ,
    <img src={samdu}/> ,
    <img src={beeline}/> ,
    <img src={prof}/> ,
    <img src={koica}/> ,
]

const Partners = () => {
  return (
    <div className='Partners'>
        <p className='title'>Hamkorlarimiz</p>
        <div className="block">
            <ul>
                {
                    items.map((index, item)=>(
                        <li key={item}>{index}</li>
                    ))
                }
        </ul>
        </div>
    </div>
  )
}

export default Partners