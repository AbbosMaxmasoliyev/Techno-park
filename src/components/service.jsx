import React from 'react'
import Service_icon from './service_icon'


// images
import trid from "../images/service/trid.png"
import qavs from "../images/service/qavs.png"
import lazer from "../images/service/lazer.png"
import say from "../images/service/say.png"
import uy from "../images/service/uy.png"
import anten from "../images/service/anten.png"
import face from "../images/service/face.png"
import web from "../images/service/web.png"


const Service = () => {
  return (
    <div className='service'>
        <div className="title">
            <p>XIZMATLARIMIZ</p>
        </div>
        <div className="block">
            <Service_icon image={trid} title={"3D modellashtirish"} />
            <Service_icon image={qavs} title={"3D printer xizmati"} />
            <Service_icon image={lazer} title={"Lazer  rezka"} />
            <Service_icon image={say} title={"Gravirovkalash xizmati"} />
        </div>
        <div className="block">
        <Service_icon image={uy} title={"Maketlar yasash xizmati"} />
            <Service_icon image={anten} title={"Buxgalteriya xizmati"} />
            <Service_icon image={face} title={"Barcha turdagi reklama xizmati"} />
            <Service_icon image={web} title={"Barcha turdagi IT xizmati"} />
        </div>
    </div>
  )
}

export default Service