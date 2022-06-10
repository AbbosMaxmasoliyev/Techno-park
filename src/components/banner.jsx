import React from 'react';

//image
import Title_about from "../images/png/title_about.png"
import texno1 from "../images/png/texno1.png" 
import texno2 from "../images/png/texno2.png" 
import shar1 from "../images/png/ellips.png" 
import sfera from "../images/png/sfera.png" 

// bnma

const Banner = () => {
  return (
    <div className='banner'>
        <div className="left">
            <h1>Samarqand viloyati yoshlar texnoparki</h1>
            <div className="neon_button">Zamonaviy  ilm  poydevori!</div>
            <img src={Title_about} className="title_image" />
        </div>
        <div className="right">
                <img src={texno1} className="texno1"/>
                <img src={texno2}   className="texno2"/>
        </div>
        <div className="images">
        <img src={shar1} className="shar1" />
        <img src={shar1} className="shar2" />
        <img src={shar1} className="shar3" />
        <img src={shar1} className="shar4" />
        <img src={shar1} className="shar5" />
        <img src={shar1} className="shar6" />
        <img src={sfera} className="shar7" />

        </div>
    </div>
  )
}

export default Banner