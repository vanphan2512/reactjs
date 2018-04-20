import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import chooseImage from './images/choose-food.svg';
import foodwayImage from './images/foodway.svg';
import addressImage from './images/add-address.svg';
import paymentImage from './images/payment.svg';


const custom_ui = {
	bckBlock: {
		background: "rgba(0, 119, 255, 0.06)",
		paddingTop: 80,
		paddingBottom: 80,
	},
	itemtoor: {
		borderRadius: 20,
		paddingTop: 60,
		paddingBottom: 60,
	},
	imageSymbol: {
		display: "table",
		margin: "auto",
		height: 69,
	}
};

class HowtoOrder extends Component {
	render() {
		return (
			<div className="row" style={custom_ui.bckBlock}>
				<div className="container contain-toorder">
					<div className="col-md-12">
						<div className="head-toorder">
							<p className="title">All-in-one workspace</p>
							<p className="text">Simply click and drag to add clickable hotspots and turn your static designs into clickable iPhone and Android prototypes.</p>
						</div>
					</div>
					<div className="col-md-12">
						<div className="row body-toorder">
							<div className="col-12 col-sm-6 col-md-4 col-toorder">
								<div className="item">
									<div className="icon">
										<i className='fa fa-calendar-check-o' ></i>
									</div>
									<div className="description">
										<p className="title">Conversation</p>
										<p className="text">The services in this category allow you to build intelligent chatbot’s or a virtual customer service agent.</p>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-4 col-toorder">
								<div className="item">
									<div className="icon">
										<i className='fa fa-calendar-check-o' ></i>
									</div>
									<div className="description">
										<p className="title">Conversation</p>
										<p className="text">The services in this category allow you to build intelligent chatbot’s or a virtual customer service agent.</p>
									</div>
								</div>
							</div><div className="col-12 col-sm-6 col-md-4 col-toorder">
								<div className="item">
									<div className="icon">
										<i className='fa fa-calendar-check-o' ></i>
									</div>
									<div className="description">
										<p className="title">Conversation</p>
										<p className="text">The services in this category allow you to build intelligent chatbot’s or a virtual customer service agent.</p>
									</div>
								</div>
							</div><div className="col-12 col-sm-6 col-md-4 col-toorder">
								<div className="item">
									<div className="icon">
										<i className='fa fa-calendar-check-o' ></i>
									</div>
									<div className="description">
										<p className="title">Conversation</p>
										<p className="text">The services in this category allow you to build intelligent chatbot’s or a virtual customer service agent.</p>
									</div>
								</div>
							</div><div className="col-12 col-sm-6 col-md-4 col-toorder">
								<div className="item">
									<div className="icon">
										<i className='fa fa-calendar-check-o' ></i>
									</div>
									<div className="description">
										<p className="title">Conversation</p>
										<p className="text">The services in this category allow you to build intelligent chatbot’s or a virtual customer service agent.</p>
									</div>
								</div>
							</div><div className="col-12 col-sm-6 col-md-4 col-toorder">
								<div className="item">
									<div className="icon">
										<i className='fa fa-calendar-check-o' ></i>
									</div>
									<div className="description">
										<p className="title">Conversation</p>
										<p className="text">The services in this category allow you to build intelligent chatbot’s or a virtual customer service agent.</p>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}
}
export default HowtoOrder;