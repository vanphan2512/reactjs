import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import appImages from './images/mask-group.jpg';
import appStoreImg from './images/app_store.svg';
import styles from './index.css';

const custom_ui = {
	imageApp: {
		background: 'url('+appImages+')',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		height: 480,
		width: '100%',
	},
	imageAppStore: {
		background: 'url('+appStoreImg+')',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		height: 53,
		width: 170,
	},
	containerPadding: {
		paddingTop: 120,
		paddingBottom: 120,
	},
	imageAppMask: {
		opacity: 0,
		width: '100%',
	}
};

class IntroApp extends Component {  
  render() {
    return (
    	<section className="client">
			<div className="container">
                <div className="row">
					<div className="item client-img mobile">
						<img src={appImages} />
					</div>
                    <div className="item client-info hidden-lg-up">
                        <div className="group-info">
                            <h3>Get client feedback at right place</h3>
                            <p>With Evrybo you can share your design and gather feedback easy — right on the design itself.</p>
                            <a href="" className="learn-more">Learn more</a>
                        </div>
                    </div>
                    <div className="item client-img desktop">
                        <img src={appImages} />
                    </div>
                </div>
            </div>
		</section>
    );
  }
}
export default IntroApp;