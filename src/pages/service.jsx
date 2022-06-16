import React from 'react'
import Banner2 from '../components/banner2'

// images
import salom_robot from "../images/salom_robot.png"
import trid from "../images/d3.png"
import web_rasm from "../images/sumka.png"
import buxgal1 from "../images/buxgal1.png"
import buxgal2 from "../images/buxgal2.png"
import teleg from "../images/teleg.png"
import smm1 from "../images/sloy.png"

import brelok2_rasm from "../images/brelok.png"
import img1 from "../images/gallery2/img1.png"
import img2 from "../images/gallery2/img2.png"
import img3 from "../images/gallery2/img3.png"
import tepa from "../images/absolute/service.png"


import Navbar from '../Navbar'
import Block_right from '../components/Block_right'
import Carousel2 from '../components/carusel2'
import Block_left from '../components/Block_left'
import Footer from '../components/footer'
import Google from '../components/google'
import Form from '../components/form'
let image = <img src={salom_robot} alt="" />

const bnr = [
    {info:`3D modellashtirish`},
    {info:`3D printer xizmati`},
    {info:`Lazer rezka`},
    {info:`Marketing xizmatlari `},
    {info:`SMM `},
    {info:`Video montaj (animatsion video roliklar )`},
    {info:`Dizaynerlik xizmatlari (smm post, logo  brending , katolog )`},
    {info:`Gravirovkalash xizmati`},
    {info:`Maketlar yasash `},
    {info:`Buxgalteriya xizmatlari`},
    {info:`Reklama xizmatlari`},
    {info:`Barcha turdagi “IT” xizmatlari`},
    {info:`Telegram bot, CRM, Web site, mobile ilovalar qilish `},
    {info:`Boshqa zamonaviy   xizmatlardan foydalaning`},
]

const d3 = [
    {info:'O`quv  yurtlari  avtomaktablar, masjid va barcha turdagi bino inshoatlarning  , oldindan tashqi qiyogfasi aks eturuvchi maketlardan yig`masi.'},
]
const brelok = [
    {info:'Turli material buyumlarga  chizmalar chizish, brend logosini yoki turli yozuvlar tushirish,  sovg`alarga  chiroyli dizayn berish imkoniyati mavjud.'},
]

const web=[
    {info:'— Web-sayt yasash'},
    {info:'— SEO'},
    {info:'— CRM (Biznesni avtomatlashtirish)'},
    {info:'— Mobile ilova'},
    {info:'— Telegram bot yasash'},
    {info:' — Saytlar nazorati'},
]

const Service = () => {
  return (
    <div className='service_block'>
        <img src={tepa} alt="" style={{position:"absolute", left:"0"}}/>
        <Navbar/>
        <Banner2 neon="BIZNING  XIZMATLAR" mapqil={bnr} bnma ={image }/>
        <Block_right title="3D MODELLASHTIRISH" mapqil={d3} image={trid}/>
        <div style={{display:"flex", justifyContent:"space-between", margin:"50px 0"}}>
            <div className="neon_button" style={{width:'auto', padding:"0 40px"}}>MAKET YASASH  XIZMATI</div>
            <p style={{fontSize:"21px", fontFamily:"poppins", width:"60%", color:"#fff"}}>O`quv  yurtlari  avtomaktablar, masjid va barcha turdagi bino inshoatlarning  , oldindan tashqi qiyofasi aks etuvchi maketlar yig`masi.</p>
        </div>
        <Carousel2/>

        <Block_right title="LAZER GRAVIROVKA" mapqil={brelok} image={brelok2_rasm}/>
        <div className="block">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
        <Block_right title="BARCHA TURDAGI IT XIZMATLARI" mapqil={web} image={web_rasm}/>

        <div className='log'>
            <div className="left">
                <img src={buxgal1} alt="" />
                <img src={buxgal2} alt="" />
            </div>
            <div className="right">
                <div className="neon_button">
                BUXGALTERIYA XIZMATI
                </div>
                <ul>
                    <li>Buxgalteriya hujjatlarining yuritilishi</li>
                    <li>Xodimlar bilan ishlash bo'yicha hujjatlarning yuritilishi</li>
                    <li>Soliq va boshqa davlat organlariga tegishli hisobotlarning o'z vaqtida taqdim etilishi</li>
                    <li>IBANK bilan ishlash; </li>
                    <li>Hujjatlarning saqlanishini ta'minlash</li>
                    <li>1C 8.3 da hisobotlar yuritish</li>
                </ul>
            </div>
        </div>
        <div className='log'>
            
            <div className="right">
                <div className="neon_button">
                MARKETING XIZMATI
                </div>
                <ul>
                    <li>Agarda siz o`z biznesingiz va kompaniya brendingiz salohiyatini, samarali reklama uslubidan foydalagan holda</li>
                    <li>- Mijojlar oqimini oshirish;</li>
                    <li>- Brendingizni omaga tanitish;</li>
                    <li>- Ijtimoiy tarmoqlarda biznesni yuritish( SMM)</li>
                    <li>- Biznesingizni muammolarini o`rganib va unga yechim tavsiya etish</li>
                    <li>- Maqsadli auditoriyaga Facebbok, Instagaramda (targeting)</li>
                    <li>- Yangi mijozlar topishga ko`maklashish;</li>
                    <li>- Shaxsiy brend ustida ishlash</li>
                    <li>- PR</li>
                    <li>- Video roliklar  </li>
                </ul>
            </div>
            <div className="left">
                <img src={teleg} alt="" />
            </div>            
        </div>
        <div className='log'>
            <div className="urta">
                <img src={smm1} alt="" />
            </div>
            <div className="right">
                <div className="neon_button">
                BARCHA TURDAGI REKLAMA XIZMATLARI
                </div>
                <ul>
                    <li>Poligrafiya</li>
                    <li>Tashqi reklamalar;</li>
                    <li>Ijtimoiy tarmoqlarda reklama( SMM);</li>
                    <li>Video roliklar </li>
                    <li>Bepul maslahat oling va  ushbu turdagi reklama xizmatlarimizdan  foydalanishinggiz mumkin . </li>
                </ul>
            </div>
        </div>
        <Form/>
        <Google/>
        <Footer/>
    </div>
  )
}

export default Service