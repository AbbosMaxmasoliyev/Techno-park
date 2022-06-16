import axios from "axios";
import React from "react";
import Navbar from "../Navbar";
import New from "../components/new";





// images
import katta_image from "../images/news_katta.png"
import obyect from "../images/object.png"
import bir from "../images/newsimage/1.png"
import ikki from "../images/newsimage/2.png"
import uch from "../images/newsimage/3.png"
import turt from "../images/newsimage/4.png"
import matrix from "../images/matrix.png"
import Form from "../components/form";
import Google from "../components/google";
import Footer from "../components/footer";




const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function News() {
  // let file = "https://jsonplaceholder.typicode.com/posts"
  // async function getText(file, myfile) {
  //   let myObject = await fetch(file);
  //   let myText = await myObject.json();
  //   let txt = "<p>";
  //   for (let i = 0; i < myText.length; i++) {
  //     txt+=myText[i].title
  //   }
  //   txt=txt+"</p>"
  //   document.getElementById("malumot").innerHTML=txt;
  // }
  // getText(file)

const salom =[
  {image:bir, text_some:`Bizning natijalar yangi bitiruvchilar`, text:"bizning bitiruvchilar kechagina bitirishdi cbncicnwifcmnwerimnriwe fmnrwefvnrejfvnerjvnerj vcbrffnbernerfvgnre dfcnrifrefnerjn  ioedjeifnrini fbvobrofbwfobwr fvvvvbrufbwuosoaincio fvruwenbujnwreouj fbcuwreerubnbnbnbnevon"},
  {image:ikki, text_some:'Zamonaviy yondashuv qanday bolishi kerak?', text:"bizning bitiruvchilar kechagina bitirishdi"},
  {image:uch, text_some:'G`oyadan tayyor maxsulotga qadar', text:"bizning bitiruvchilar kechagina bitirishdi"},
  {image:turt, text_some:'Ilm chegara bilmaydi', text:"bizning bitiruvchilar kechagina bitirishdi nbujnev dncvfjvnivnw nifvneov uirhnfverun  nhuivnjin  ncivdnsinm"},
]


   
  return (
    <div id="news">
      
      <Navbar/>
      <div className="neon_button" style={{width:"261px", marginTop:"50px"}}>Yangiliklar</div>
      <div id="katta">
        <img src={katta_image} alt="" style={{width:"349px", height:"349px"}} />
        <div id="malumot">
          <div className="rasm">
            <img src={obyect} alt="" />
          </div>
        <div className="p">
          <p><span> Yoz mavsumida farzandingiz ta'tilni qiziqarli va foydali o'tkazishini xohlaysizmi?</span></p> 
          <p>Aynan siz uchun maxsus taklif bor 
          Samarqandda ilk bor Yoshlar Texnoparki yangi Innovatsion (Technocamp) "TEXNO-LAGER" loyihasini e`lon qiladi. 
          Bunaqasi hali bo'lmagan. 
          Agar sizning farzandingiz 6 yoshdan 16 yoshgacha bo'lsa, 
          Texnolagerimizda zamonaviy to'garaklarga qatnashishlari mumkin. 
          Innovatsion Texnolagerda farzandingiz yangi texnologiyalar olamiga qiziqarli sayohat, hamda vaqtlarini foydali o'tkazishlari mumkin. </p>
          
          <p><span>Yozgi Innovatsion "TEXNO LAGER" dasturida: </span></p>

          <ul>
            <li>Lego va robototexnika </li>
            <li>Kompyuter savodxonligi </li>
            <li>IT dasturlash </li>
            <li>Sport (shaxmat, shashka )</li>
            <li>Samalyotsozlik </li>
            <li>Grafik dizayn </li>
            <li>Multik time </li>
            <li>Psixologik treninglar</li>
            <li>Nutqni rivojlantirish</li>
          </ul>
            <p><span>Texnolagerning davomiyligi 12 kun.</span></p>
            <p>Shoshiling joylar soni cheklangan. 
            Ro`yxatdan o`tish uchun ushbu raqamlarga  murojat qilishingiz mumkin.   </p>
            <p> +998 88 934-55-05 +998 (99) 116-01-23</p>
            </div>
        </div>
      </div>
      <div className="yangiliklar">
      {salom.map((index, item)=>(
                    <New key={item.toString()} image={index.image} some_text={index.text_some} text={index.text}/>
                ))}
      </div>
      <img src={matrix} alt="" className="matrix" />

      <Form/>
      <Google/>
      <Footer/>
      
     
    </div>
  );
}

