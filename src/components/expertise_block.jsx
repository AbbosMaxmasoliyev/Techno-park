import React from 'react'
import Expertise from './expertise';

//image 
import Bobur from "../images/expertise/bobur.png";
import Dilshod from "../images/expertise/dilshod.png";
import Samandar from "../images/expertise/samandar.png";
import Rustam from "../images/expertise/rustam.png";


// back image
import Raketa from "../images/background/raketa.png"
import Sxema from "../images/background/sxema.png"


const Expertise_block = () => {
  return (
    <div className='expertise_block'>
        <div className="left">
            <Expertise info="Agar reja ish bermasa, rejani o`zgartiring maqsadni emas!" name="Dilshod Jalilov" role="Inovatsion loyihalarni  ivolantirish bo’limi bosh mutaxasisi" image_pic={Dilshod}/>
            <Expertise info="O`z biznesingizni avtomatlashtiring yuksaklarga parvoz etiring , biz bilan uching!" name="Akhmadjonov Boburjon" role="Marketolog" image_pic={Bobur}/>
        </div>
        <div className="right">
            <Expertise info="Innovatsiya - Ilmni, bilimni, g‘oyani pulga aylantirishdir" name="Rustam Nabiyev" role="Texnopark yetakchi mutaxassisi" image_pic={Rustam}/>
            <Expertise info="O`z biznesingizni avtomatlashtiring yuksaklarga parvoz etiring , biz bilan uching!" name="Samandar Makhmudov" role="Programmer IT specialist" image_pic={Samandar}/>
        </div>
    </div>
  )
}

export default Expertise_block