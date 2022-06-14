import React from 'react'
import Banner2 from '../components/banner2';
import Navbar from '../Navbar'
import aylan from "../images/background/service.png"
import aylana from "../images/background/aylana.png"
import Block_right from '../components/Block_right';
import Block_left from '../components/Block_left';

import first from "../images/rasm/first.png"
import multikrobot from "../images/rasm/multikrobot.png"
import romantic from "../images/rasm/romantic.png"
import matn from "../images/rasm/matn.png"
import stark from "../images/rasm/stark.png"
import olimjon from "../images/olimjon.png"
import smm_rasm from "../images/smm.png"

// caruselmas image
import rasm1 from "../images/caruselmas/1.png"
import rasm2 from "../images/caruselmas/2.png"
import rasm3 from "../images/caruselmas/3.png"
import rasm4 from "../images/caruselmas/4.png"
import rasm5 from "../images/caruselmas/5.png"
import Google from '../components/google';
import Footer from '../components/footer';



let lego_video = <iframe width="483" height="322" src="https://www.youtube.com/embed/amvhcedGlfk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
let dizayn_video = <iframe width="483" height="322" src="https://www.youtube.com/embed/6OwijWVM-ww" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
let romantik = <iframe width="600" height="500" src="https://www.youtube.com/embed/7N60oFtjBIA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
let motion = <iframe width="483" height="322" src="https://www.youtube.com/embed/cSwU9TO4Ra0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
let autocad = <iframe width="483" height="322" src="https://www.youtube.com/embed/inp4zk4ykv8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
let dasturlash = <iframe width="483" height="322" src="https://www.youtube.com/embed/yuquGt_9Vrs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
let cinema  = <iframe width="483" height="322" src="https://www.youtube.com/embed/h6fLpo7vrFY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
let aviasport = <iframe width="550" height="422" src="https://www.youtube.com/embed/9491F9gSAyc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


const items = [
    {info: 'Kompyuter savodxonligi  '},
    {info: 'Blender'},
    {info: '3Ds max & Autocad kurslari'},
    {info: 'IT foundation'},
    {info: 'Blogerlik '},
    {info: 'Mexatronika'},
    {info: 'Interyer dizayn'},
    {info: 'Grafik Dizayn / Web dizayn'},
    {info: 'Video montaj  / Moushn grafika'},
    {info: 'Robototexnika kurslari'},
    {info: 'Lego Mindstorm bolalar uchun'},
    {info: 'Aviasport bolalar uchun'},
]

const computer = [
  {info:`Kompyuter haqida boshlang’ich bilimlar.`},
  {info:`Kompyuterning muhim qurilmalari  va asosiy dasturlari.`},
  {info:`Office dasturlari ( Word, Excel, Power Point ) `},
  {info:`Brauzerlar bilan ishlash.`},
  {info:`Himoya dasturlar bilan ishlash va h.k`},
  {info:`Tartibi: Haftada 3 kun 2 soatdan`},
  {info:`Davomiyligi: 2 oydan 3 oygacha`},
]

const lego = [
  {info:`Texnologiya: `},
  {info:`Lego Mindstorm`},
  {info:`Bloklar yordamida dasturlash `},
  {info:`Tartibi: Haftada 3 kun 2 soatdan`},
  {info:`Davomiyligi: 2 oy`},
]

const robotexnika=[
  {info:`Texnologiyalar: `},
  {info:`Elektronika`},
  {info:`Mikroprotsessorli dasturlash (Arduino kids)`},
  {info:`Dasturlash (Algoritmlash)`},
  {info:`Injenerlik (Loyihalash)`},
  {info:`Tartibi: Haftada 3 kun 2 soatdan`},
  {info:`Davomiyligi: 4 oydan 6 oygacha`},
]

const dizayn = [
  {info: `Texnologiyalar: `},
  {info: `Adobe Photoshop`},
  {info: `Adobe Illustrator`},
  {info: `Corel draw `},
  {info: `Figma, Adobe XD ,  Skech`},
  {info: `Tartib: Haftada 3 kun 2 soatdan`},
  {info: `Davomiyligi: 3 oydan 6 oygacha`},
]

const montaj = [
  {info:`Texnologiyalar: `},
  {info:`Adobe Photoshop`},
  {info:`Adobe Illustrator`},
  {info:`Adobe After Effect`},
  {info:`Adobe Preimer Pro`},
  {info:`Tartib: Haftada 3 kun 2 soatdan`},
  {info:` Davomiyligi: 3 oydan 6 oygacha`},
]

const d3max = [
  {info:`3D s max dasturi: `},
  {info:`Uyning ichki va tashqi dizaynlar qilish`},
  {info:`Animatsion   roliklar`},
  {info:`Uy jihozlarini yasash`},
  {info:`Tartibi: Haftada 3 kun 2 soatdan`},
  {info:`Davomiyligi: 4 oydan 6 oygacha`},
]

const web = [
  {info:`HTML`},
  {info:`CSS`},
  {info:`JavaScript`},
  {info:`Bootstrap`},
  {info:`Python`},
  {info:`Django`},
  {info:`SQL / Posgress SQL`},
  {info:`Data Base`},
  {info:`Tartibi: Haftada 3 kun 2 soatdan`},
  {info:`Davomiyligi: 6 oydan 8 oygacha`},
]

const bloger = [
  {info: `Texnologiyalar: `},
  {info: `Blogerlik sirlari`},
  {info: `You Tube  bilan ishlash`},
  {info: `Video montaj`},
  {info: `Adobe Preimer Pro`},
  {info: `Fotolar bilan ishlash (Photoshop ) `},
  {info: `Instagram / Tik tokda  proffessional ishlash`},
  {info: `Tartibi: Haftada 3 kun 2 soatdan`},
  {info: `Davomiyligi: 3 oy`},
]
const smm = [
  {info:`Targeting`},
  {info:`SMM`},
  {info:`Kopirayterlik`},
  {info:`Marketing asoslari`},
  {info:`Ijtimoiy tarmoqlar bilan ishlash`},
  {info:`Tartibi: Haftada 3 kun 2 soatdan`},
  {info:`Davomiyligi 2 oydan 3 oygacha`},
]
const blender = [
  {info:`Texnologiyalar:`},
  {info:`Blender - bu uch o'lchovli`},
  {info:`Kompyuter grafikalari`},
  {info:`Modellashtirish,   haykaltaroshlik, animatsiya.`},
  {info:`Cinema 4D - bu ikkitasini yaratish va tahrirlash uchun ko'p qirrali  dastur.`},
  {info:`Tartibi: Haftada 3 kun 2 soatdan`},
  {info:`Davomiyligi: 3 oy`},
]
const avia = [
  {info: `Aviasport  bu turli xil  materiallardan  jumladan `},
  {info: `Ellastik materiallar yoki yog'ochdan samalyotlar yasash ularni to'g'ri  uchirishni o'rgatiladi.Ushbu sport turi bo'yicha `},
  {info: `O'zbekiston va xorijiy musobaqalarda ishtirok etish imkoniyatini taklif etadi`},
  {info: `Tartibi: Haftada 3 kun 2 soatdan`},
  {info: `Davomiyligi 2 oydan 3 oygacha `},
]

const image = <div className="rasm"><img src={aylan}/><img src={aylana} className='aylanadigan'/></div>;
const Services = () => {
  return (
    <div className='services'>
        <Navbar/>
        <Banner2 neon="Bizning zamonaviy kurslarimiz" mapqil={items} bnma ={image}/>
        <Block_right title="KOMPYUTER SAVODXONLIGI" mapqil={computer} image={first}/>
        <Block_left title="LEGO  MINDSTORM (BOLALAR UCHUN)" mapqil={lego} video={lego_video}/>
        <Block_right title=" Grafik Dizayn / Web dizayn" mapqil={dizayn} video={dizayn_video}/>
        <Block_left title="Robototexnika" mapqil={robotexnika} image={multikrobot}/>
        <Block_left image2={romantic} video={romantik}/>
        <Block_right title="Video montaj & Moushn grafika" mapqil={montaj} video={motion}/>
        <div className="block">
          <img src={matn} alt="" />
          <img src={stark} alt="" />
        </div>
        <div className="block">
          <img src={rasm1} alt="" />
          <img src={rasm2} alt="" />
          <img src={rasm3} alt="" />
          <img src={rasm4} alt="" />
          <img src={rasm5} alt="" />
        </div>
        <Block_right title="3Ds max & Autocad " mapqil={d3max } video={autocad}/>
        <Block_left title="Web  dasturlash " mapqil={web} video={dasturlash}/>
        <Block_right title="Blogerlik & you tube" mapqil={bloger } image={olimjon}/>
        <div className="block back">
          <p>Zamonaviy kasblar sizning  eng  tog`ri  tanlovingiz!</p>
        </div>
        <Block_right title="SMM menejer" mapqil={smm } image={smm_rasm}/>
        <Block_left title="Blender & Cinema 4D" mapqil={blender} video={cinema}/>
        <Block_right title="Aviasport bolalar uchun" mapqil={avia}video={aviasport}/>
        <Google/>
        <Footer/>
    </div>
  ) 
}

export default Services;