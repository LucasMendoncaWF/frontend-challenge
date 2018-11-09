import React, { Component } from 'react';
import '../styles/tab.scss';

class Tab extends Component {

    selectTab =() =>{
        this.props.ChangeTab(this.props.tabNumber);
      }
    

  render() {
    return ( 
    <div className={"tab " + (this.props.tabSelec ? 'tab-selected': 'tab-not-selected')} onClick={this.selectTab} >
        <div className="tab-title">{this.props.tabName.toUpperCase()}</div>
    </div>
    );
  }
}

export default Tab;
