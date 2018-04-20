import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import cardfooter from './images/card-footer.png';
import logofooter from './images/logo-footer.svg';
import facesbol from './images/face-sbol.svg';
import BackToTop from './images/backtotop.png';


class Footer extends Component {
	render() {
		return (
			<footer className="footer-page">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-4 col-lg-4">
							<div className="logo-footer">
								Project 
							</div>
							<div className="follow-us">
								<ul>
									<li>
										<a href=""><i className="fa fa-facebook"></i></a>
									</li>
									<li>
										<a href=""><i className="fa fa-twitter"></i></a>
									</li>
									<li>
										<a href=""><i className="fa fa-google-plus"></i></a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-12 col-md-8 col-lg-8 footer-page-right">
							<div className="row">
								<div className="col-12 col-md-12 subscribe">
									<p>We collaborate with ambitious brands and people; we’d love to build something great together.</p>
									<a className="mailto" href="mailto:project.x@gmail.com">project.x@gmail.com </a>
								</div>
								<div className="col-12 col-md-12 menu-footer">
									<ul>
										<li>
											<a href="#">About us</a>
										</li>
										<li>
											<a href="#">Services</a>
										</li>
										<li>
											<a href="#">Team</a>
										</li>
									</ul>
									<ul>
										<li>
											<a href="#">Expore</a>
										</li>
										<li>
											<a href="#">Tour</a>
										</li>
										<li>
											<a href="#">pricing</a>
										</li>
									</ul>
									<ul>
										<li>
											<a href="#">Support</a>
										</li>
										<li>
											<a href="#">Contac us</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-12 col-md-4 col-lg-4">
								<div className="copy-right">
									<p>©2018 Charlie Puth. </p>
									<p> All rights Reserved</p>
								</div>
							</div>
							<div className="col-12 col-md-8 col-lg-8 footer-bottom-right">
								<ul>
									<li>
										<a href="">Terms & Conditions</a>
									</li>
									<li>
										<a href="">Privacy Policy</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div id="scroll-top" className="scroll-top">
					<a href="javascript:void(0)">
						<span className="icon">
							<img src={BackToTop} />
						</span>
						<span className="text">Top</span>
					</a>
				</div>
			</footer>

		);
	}
}
export default Footer;