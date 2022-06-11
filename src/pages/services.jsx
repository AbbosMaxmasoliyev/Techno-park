import React from 'react'
import Banner2 from '../components/banner2';
import Navbar from '../Navbar'
import aylan from "../images/background/service.png"
import aylana from "../images/background/aylana.png"
import Block_right from '../components/Block_right';
import Block_left from '../components/Block_left';

import first from "../images/rasm/first.png"
import multikrobot from "../images/rasm/multikrobot.png"

let lego_video = <iframe width="483" height="322" src="https://www.youtube.com/embed/amvhcedGlfk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
let dizayn_video = <iframe width="483" height="322" src="https://www.youtube.com/embed/6OwijWVM-ww" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

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
    </div>
  ) 
}

export default Services;