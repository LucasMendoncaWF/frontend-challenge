import React, { Component } from 'react';
import ArrowIco from '../images/arrow-info.png';
import '../styles/image.scss';

class Image extends Component {

  state ={
    hover: false
  }

  MouseEnter = () =>{
    this.setState({hover: true});
  }

  MouseLeave = () =>{
    this.setState({hover: false});
  }

  render() {
    return ( 
    <div className="image-container" onMouseEnter={this.MouseEnter} onMouseLeave={this.MouseLeave}>
      <img className='client-image' alt='client' src={this.props.photo}></img>
      {(() =>{
        if(this.state.hover){
          return (
            <div className='image-info-shadow'>
              <div className='image-info'>
                <div className="client-title">{this.props.tags[2]}</div>
                <div className='client-desc'>{this.props.tags[0]}, {this.props.tags[1]}</div>
                <div className="desc-line"></div>
                <img className='arrow-desc' alt='arrow' src={ArrowIco} />
              </div>
            </div>
          );
        }
      })()}
    </div>
    );
  }
}

export default Image;
