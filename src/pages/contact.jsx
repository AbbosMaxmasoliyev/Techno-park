import React from 'react'
import Navbar from '../Navbar'


// images
import Image from "../images/background/contact.png"
import Form from '../components/form'
import Google from '../components/google'
import Footer from '../components/footer'

const Contact = () => {
  return (
    <div className='contact'>
        <Navbar/>
        <div className="neon_button">Biz  BILAN  BOG`LANISH  uchun</div>
        <img src={Image} alt="" />
        <Form/>
        <Google/>
        <Footer/>
    </div>
  )
}

export default Contact