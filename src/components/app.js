import React, { Component } from 'react';
import '../styles/app.scss';
import ImagesList from './images-list';
import LateralMenu from './lateral-menu';
import ContactInfo from './contact-info';

class App extends Component {

  render() {
    return ( 
    <div className="app-container">
        <LateralMenu />
        <ImagesList />
        <ContactInfo />
    </div>
    );
  }
}

export default App;
