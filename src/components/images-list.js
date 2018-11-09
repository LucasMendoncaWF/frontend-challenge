import React, { Component } from 'react';
import '../styles/images-list.scss';
import Image from './image';

var loadAPIInfo = (callback, data) => {   
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', data, true);
    xobj.onreadystatechange = () =>{
      if(xobj.readyState === 4 && xobj.status === 200){
            callback(xobj.responseText);
      }
    };
    xobj.send(null);  
  }
   
   
 
class ImageList extends Component {

    state = {
        imagesData: []
      }
    

    //gets info from the API's from the urls
    getImagesFromAPI = () =>{
        loadAPIInfo((response) => {
          var dados = JSON.parse(response);
          this.setState({imagesData: dados});
         }, "http://www.mocky.io/v2/5be35d6a2f00006b00ca2319.json");
    }
    
    constructor(props) {
        super(props);
        this.getImagesFromAPI();
    }

  render() {
    return ( 
    <div className="images-list-container">
        {this.state.imagesData.map(imageInfo =>{
            return <Image key={imageInfo.id} photo={imageInfo.photoUrl} tags={imageInfo.tags} />
        })
        }
    </div>
    );
  }
}

export default ImageList;
