import React from 'react'
import Banner2 from '../components/banner2';
import Navbar from '../Navbar'
import aylan from "../images/background/service.png"
import aylana from "../images/background/aylana.png"

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

const image = <div className="rasm"><img src={aylan}/><img src={aylana} className='aylanadigan'/></div>;
const Services = () => {
  return (
    <div className='services'>
        <Navbar/>
        <Banner2 neon="Bizning zamonaviy kurslarimiz" mapqil={items} bnma ={image}/>
    </div>
  )
}

export default Services;