import React, { Component } from 'react';
import '../styles/filter.scss';
import FilterIco from '../images/filter.png';
import Link from './link';

class Filter extends Component {

    state = {
        linkSelected: 1
    }

    linkNumber = 0;
    links =[
        'All Works',
        'Web Design',
        'Illustration',
        'Photography',
        'Wallpapers',
        'Brouches'
    ];

    ChangeLink = (n) => {
        this.setState({linkSelected: n});
    }

  render() {
    return ( 
    <div className="filter-container">
        <div className="filter-content">
            <div className="filter-title">
                Filter 
                <img alt='filter' src={FilterIco}/>
            </div>
            <div className="links">
                {this.links.map(link =>{
                    this.linkNumber++;
                    let linkSelec = false;
                    if(this.state.linkSelected === this.linkNumber){
                        linkSelec = true
                    }
                    let number = this.linkNumber;
                    if(this.linkNumber === this.links.length){
                        this.linkNumber = 0;
                    }          
                    return <Link key={number} linkName={link} ChangeLink={this.ChangeLink} linkNumber={number} linkSelec={linkSelec}/>
                })}
            </div>
        </div>
    </div>
    );
  }
}

export default Filter;
