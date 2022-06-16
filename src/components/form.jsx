import React, { Component } from 'react'
import back_image from "../images/background/aylana_say.png"

// images
import tel_icon from "../images/icons/tel_icon.png"
import mail_icon from "../images/icons/mail_icon.png"

export default class Form extends Component {
  state={users:[], name:"",tg_user:"", raqam:"",savol:""}
  handleInput = (e)=>{
    const {name, value}=e.target;
    this.setState({[name]:value});
  }
  createApi = ()=>{
    const url = "https://reqres.in/api/users"
    const {name, raqam, tg_user, savol} = this.state;
    fetch(url,{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
        },
      body: JSON.stringify({name, raqam, tg_user,savol})
    })
    .then(res => res.json())
    .then(data=>console.log(data))
  }
  render() {
    return (
      <div className='forma'>
        <img src={back_image} alt="" className='image' />
        <div className="blokk">
          <div className="left">
            <h1>Hamkorlik uchun</h1>
            <p>Yoshlar texnoparki bilan o`z g`oyangiz reallashtiring </p>
            <p><i><img src={tel_icon} alt="" /></i> +998 88 934-55-05</p>
            <p><i><img src={mail_icon} alt="" /></i> samytpuz@gmail.com</p>
          </div>
          <div className="right">
            <h2>Siz bilan bog`lanishimiz uchun</h2>
            <input type="text" name='name' onChange={this.handleInput} placeholder="Ismingizni kiriting"/>
            <input type="text" name='tg_user' onChange={this.handleInput} placeholder="Telegram manzilingizni kiriting"/>
            <input type="text" name='raqam' onChange={this.handleInput} placeholder="Telefon raqamingiz"/>
            <textarea name="savol" id="savol" cols="30" rows="10" onChange={this.handleInput} placeholder="Xabaringizni kiriting"></textarea>
            <button onClick={this.createApi}>hisobla</button>
          </div>
        </div>
      </div>
    )
  }
}
