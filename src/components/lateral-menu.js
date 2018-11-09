import React, { Component } from 'react';
import '../styles/lateral-menu.scss';
import Logo from '../images/logo.png';
import TabMenu from './tab-menu';
import Filter from './filter';
import SocialMedia from './social-media';

class LateralMenu extends Component {

  render() {
    return ( 
    <div className="lateral-menu-container">
        <div className='logo-area'>
            <img alt='logo' src={Logo} className="logo"/>
        </div>
        <TabMenu />
        <Filter />
        <SocialMedia />
        <div className="all-rights">© 2014 Kappe, All Rights Reserved</div>
    </div>
    );
  }
}

export default LateralMenu;
