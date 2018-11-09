import React, { Component } from 'react';
import Tab from './tab';

class TabMenu extends Component {

    state = {
        tabSelected: 1
    }

    tabNumber = 0;

    tabs =[
        'Home',
        'work',
        'About',
        'Blog',
        'Services',
        'Contact'
    ];

    
    ChangeTab= (n) => {
        this.setState({tabSelected: n});
    }

  render() {
    return ( 
    <div className='tabs'>
        {this.tabs.map(tab =>{
            this.tabNumber++;
            let tabSelec = false;
            if(this.state.tabSelected === this.tabNumber){
                tabSelec = true
            }
            let number = this.tabNumber;
            if(this.tabNumber === this.tabs.length){
                this.tabNumber = 0;
             }  
          return <Tab key={number} tabName={tab} ChangeTab={this.ChangeTab} tabNumber={number} tabSelec={tabSelec}/>
        })}
    </div>
    );
  }
}

export default TabMenu;
