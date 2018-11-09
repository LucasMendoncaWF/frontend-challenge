import React, { Component } from 'react';
import '../styles/contact-info.scss';
import InfoContactIco from '../images/info-contact.png';
import HouseIco from '../images/houseIco.png';
import LetterIco from '../images/letterInfo.png';
import TelIco from '../images/telInfo.png';

class ContactInfo extends Component {

  render() {
    return ( 
    <div className="contact-container">
        <img alt='info-contact' src={InfoContactIco} className="info-contact-ico"/>
        <div className='contact-info'>
            <div className='info'>
                <img alt='info-contact' src={TelIco} className="ico-info"/>
                <div className='info-text'>9930 1234 5679</div>
            </div>
            <div className='info'>
                <img alt='info-contact' src={LetterIco} className="ico-info"/>
                <div className='info-text'>contact@domain.com</div>
            </div>
            <div className='info'>
                <img alt='info-contact' src={HouseIco} className="ico-info"/>
                <div className='info-text'>street address example</div>
            </div>
        </div>
    </div>
    );
  }
}

export default ContactInfo;
