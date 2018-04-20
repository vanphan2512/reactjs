import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import ImageProduct from './images/product3.jpg';
import ImageProduct1 from './images/product1.jpg';
import ImageProduct2 from './images/product2.jpg';
import ImageProduct3 from './images/product4.jpg';
import Banner from '../../Common/Banner';
import styles from './index.css';

const custom_ui = {
	headline: {
		fontSize: 24,
		paddingTop: 16,
		marginBottom: 12,
		fontWeight: 400,
	},
	slide: {
		padding: 10,
	},
};
const colbanner = {
	display: 'table',
	margin: 'auto',
	paddingLeft: 0,
	paddingRight: 0,
	height: 400,

}
class Shopping extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slideIndex: 0,
		};
	}

	handleChange = (value) => {
		this.setState({
			slideIndex: value,
		});
	};
	render() {
		return (
			<div>
				<section className="header-banner-page">
					<div className="container">
						<div className="row colbanner">
							<div className="frm-header">
								<div className="col-12 col-md-12 section-title text-center">
									<h3 className="title">Shopping</h3>
								</div>
								<div className="col-12 col-md-12 frm-search">
									<div className="input-group">
										<span className="input-group-addon icon-search">
											<i className="fa fa-search"></i>
										</span>
										<input type="text" className="form-control inpsearch" placeholder="Search..." />
										<span className="input-group-addon bnt-search">Search</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="main-container">
					<section className="section-page product-page">
						<div className="container">
							<div className="row product-tabs">
								<div className="slider-tabs mx-auto">
									<ul className=" nav nav-tabs nav-justified nav-tabs-info">
										<li className="nav-item">
											<a className="nav-link active" data-toggle="tab" href="#food">Food</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" data-toggle="tab" href="#hight-tech">High - tech</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" data-toggle="tab" href="#decoration">Decoration</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" data-toggle="tab" href="#liver">Liver</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" data-toggle="tab" href="#liver1">Liver</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" data-toggle="tab" href="#liver2">Liver</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="tab-content product-tabs-content">
								<div className="tab-pane fade active show" id="food">
									<div className="row">
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct1 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct2 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct3 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct1 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct2 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct3 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct1 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct2 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct3 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="hight-tech">
									<div className="row">
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct1 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct1 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="fdecorationood">
									<div className="row">
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct1 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct1 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="liver">
									<div className="row">
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct1 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct1 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="liver1">
									<div className="row">
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct1 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct1 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-pane fade" id="liver2">
									<div className="row">
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct1 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct1 + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
										<div className="col-12 col-md-4 product_single overloading-hover">
											<div className="product">
												<div className="product-image" style={{ background: "url(" + ImageProduct + ")" }}></div>
												<div className="product-desc">
													<h3><a href="#">Adding Server Logic</a></h3>
													<p>Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}
export default Shopping;
