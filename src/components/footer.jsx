import React from 'react';
import Logo  from "../images/logo/logo.png"
import Navbar from '../Navbar';

// images

import Youtube from "../images/icons/youtube.png"
import Instagram from "../images/icons/instagram.png"
import Telegram from "../images/icons/telegram.png"
import Facebook from "../images/icons/facebook.png"
import Google from './google';

const Footer = () => {
  return (
    <div className='footer'>
        <Navbar/>
        <hr/>
        <div className="block">
            <div className="left">
            <p>Manzil: Samarqand shahar</p>
            <p>Universitet xiyoboni</p>
            <p>Mo'ljal: SamDU Tarix fakulteti hovlisi,</p>
            </div>
            <div className="center">
                <div className="center_block">
                    <a href="youtube.com"><img src={Youtube} alt="" /></a>
                    <a href="instagram.com"><img src={Instagram} alt="" /></a>
                    <a href="telegram.org"><img src={Telegram} alt="" /></a>
                    <a href="facebook.com"><img src={Facebook} alt="" /></a>
                </div>
                <p style={{textTransform:"uppercase", fontSize:"12px"}}>yOSHLAR  TEXNOPARKI - Zamonaviy  ilm  poydevori!</p>
            </div>
            <div className="right">
                <p>+998 88 934 55 05</p>
                <p>samytpuz@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer

