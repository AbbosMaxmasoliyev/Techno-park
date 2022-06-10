import React from 'react';
import Logo  from "../images/logo/logo.png"
import Navbar from '../Navbar';

const Footer = () => {
  return (
    <div>
        <Navbar/>
        <hr/>
        <div className="block">
            <div className="left">
            <p>Manzil: Samarqand shahar</p>
            <p>Universitet xiyoboni</p>
            <p>Mo'ljal: SamDU Tarix fakulteti hovlisi,</p>
            </div>
        </div>
    </div>
  )
}

export default Footer

