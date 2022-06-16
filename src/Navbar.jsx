import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// images
import Logo from "./images/logo/logo.png"


class Navbar extends Component {

	componentDidMount() {
			
        }
	
	
    render() {
        return (
            <div className='Navbar'>
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <div className="links">
              <Link to={'/'} className="dez-page site-button primary">Biz haqimizda</Link>
              <Link to={'/services'} className="dez-page site-button primary">Kurslarimiz</Link>
              <Link to={'/service'} className="dez-page site-button primary">Xizmatlarimiz</Link>
              <Link to={'/news'} className="dez-page site-button primary">Yangiliklar</Link>
              <Link to={'/contact'} className="dez-page site-button primary">Aloqa</Link>
              </div>
            </div >
        )
    }
}

	
export default Navbar;