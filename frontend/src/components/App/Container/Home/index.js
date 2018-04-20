import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import BannerHome from '../../Common/BannerHome';
import MostChoice from '../../Common/MostChoice';
import HowtoOrder from '../../Common/HowtoOrder';
import IntroApp from '../../Common/IntroApp';
import Interactive from '../../Common/Interactive';
import LogoBrand from '../../Common/LogoBrand';
import About from '../../Common/About';

class Home extends Component {
  render() {
    return (
    	<div className="container-fluid"> 
            <BannerHome></BannerHome>
            <div className="main-container">
                <MostChoice></MostChoice>
                <About></About>
                <IntroApp></IntroApp>
                <Interactive></Interactive>
                <HowtoOrder></HowtoOrder>
                <LogoBrand></LogoBrand>
            </div>
      </div>
    );
  }
}
export default Home;