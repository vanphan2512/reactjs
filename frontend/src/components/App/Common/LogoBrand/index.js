import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import partnerImg from './images/partner.png';
import partnerImg1 from './images/partner1.png';
import partnerImg2 from './images/partner2.png';
import partnerImg3 from './images/partner3.png';
import partnerImg4 from './images/partner4.png';
import partnerImg5 from './images/partner5.png';
import partnerImg6 from './images/partner6.png';
import OwlCarousel from 'react-owl-carousel';
import styles from './index.css';

const custom_ui = {
	backBrand: {
		background: '#8BC24A',
		padding: '25px 0',
	},
};

const options = {
	animateOut: 'slideOutDown',
    animateIn: 'flipInX',
	navText: ['<', '>'],
	items: 7,
	nav: false,
	dots: false,
	autoplay: true,
	navSpeed: 200,
	responsive:{
		0:{
			items:3
		},
		600:{
			items:5
		},
		1000:{
			items:7
		}
	}
}

class LogoBrand extends Component {  
  render() {
    return (
    	<section className="partner">
            <div className="container">
                <div className="row">
                    <div className="col-12">                        
                        <p className="text-center">20% guaranteed refund on your purchases</p>
                    </div>
                </div>
                <div className="row list-partner slide-partner">
				<OwlCarousel className="owl-theme" loop margin={10} nav {...options}>
                    <div className="flex items-center justify-center logo-slider-container">
                        <img src={partnerImg} />
                    </div>
                    <div className="flex items-center justify-center logo-slider-container">
                        <img src={partnerImg2} />
                    </div>
                    <div className="flex items-center justify-center logo-slider-container">
                        <img src={partnerImg3} />
                    </div>
                    <div className="flex items-center justify-center logo-slider-container">
                        <img src={partnerImg4} />
                    </div>
                    <div className="flex items-center justify-center logo-slider-container">
                        <img src={partnerImg5} />
                    </div>
                    <div className="flex items-center justify-center logo-slider-container">
                        <img src={partnerImg6} />
                    </div>
                    <div className="flex items-center justify-center logo-slider-container">
                        <img src={partnerImg1} />
                    </div>
                    <div className="flex items-center justify-center logo-slider-container">
                        <img src={partnerImg2} />
                    </div>
                    <div className="flex items-center justify-center logo-slider-container">
                        <img src={partnerImg3} />
                    </div>
                    <div className="flex items-center justify-center logo-slider-container">
                        <img src={partnerImg4} />
                    </div>
					</OwlCarousel>
                </div>
            </div>
        </section>
    );
  }
}
export default LogoBrand;