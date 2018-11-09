import React, { Component } from 'react';
import '../styles/social-media.scss';
import Media1 from '../images/media1.png';
import Media2 from '../images/media2.png';
import Media3 from '../images/media3.png';
import Media4 from '../images/media4.png';
import Media5 from '../images/media5.png';
import Media6 from '../images/media6.png';
import Media7 from '../images/media7.png';

class SocialMedia extends Component {

    medias = [
        Media1,
        Media2,
        Media3,
        Media4,
        Media5,
        Media6,
        Media7
    ]

  render() {
    return ( 
    <div className="social-media-area">
        {this.medias.map(media =>{
            return <img className="media" alt="media" src={media} />
        })}
    </div>
    );
  }
}

export default SocialMedia;
