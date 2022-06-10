import React from 'react'
import Activity from '../components/activity'
import Banner from '../components/banner'
import Carousel1 from '../components/carousel'
import Expertise_block from '../components/expertise_block'
import Professional from '../components/professional'
import Service from '../components/service'
import gif from "../images/gif/texnogif.gif"
import robot from "../images/robot.png"
import mobile from "../images/mobile.png"
import odam from "../images/odam.png"
import Partners from '../components/partners'
import MyForm from '../components/form'
import Form from '../components/form'
import main from "../components/main"

const Home = () => {

  return (
    <div className='home'>
      <Banner/>
      <Activity/>
      <Carousel1/>
      <div id="gif">
        <p>IT-ni  noldan  PRO  gacha  o`rganing!</p>
        <img src={gif} style={{width:"100%", height:"456px"}} />
      </div>
      <Expertise_block/>
      <Service/>
      <Professional/>
      <div className="mobile">
        <img src={robot} />
        <h1>O`z Robotingizni yasang va o`zingiz bilan olib keting !</h1>
        <img src={mobile} alt="" />
      </div>
      <Partners/>
      <img src={odam} alt="" width={"90%"} style={{ alignSelf:"center", margin:"2% 0"}}/>
      {/* <Form/> */}
      <script src={main}></script>
    </div>
  )
}

export default Home