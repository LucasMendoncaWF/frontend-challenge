import React, { Component } from 'react';
import '../styles/link.scss';

class Link extends Component {

  selectLink =() =>{
    this.props.ChangeLink(this.props.linkNumber);
  }

  render() {
    return ( 
    <div className="link" onClick={this.selectLink}>
        <div className={"link-title " + (this.props.linkSelec ? 'link-selected': 'link-not-selected')}>{this.props.linkName}</div>
    </div>
    );
  }
}

export default Link;
