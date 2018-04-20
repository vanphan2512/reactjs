import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import logo from '../../../../assets/images/logo.svg';
import styles from './index.css';
import avatar from './images/avatar.png';
import $ from 'jquery';

const avatarImage = {
	backgroundImage: 'url(' + avatar + ')',
	backgroundRepeat: 'no-repeat',
	backgroundPositon: 'center',
	backgroundSize: 'cover',
};

const signStyle = {
	display: 'none',
}

const custom_ui = {
	color_label: {
		color: '#fff',
	}, 
	bg_button: {
		backgroundColor: '#0077FF',
	},
	btn_w_md: {
		width: '120px',
	},
};


class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 1
		};
	}

	handleChange = (event, index, value) => this.setState({ value });

	render() {
		$(document).ready(function(){
			$('body').scrollspy({
				target: '#mainNav',
				offset: 56
			});
			var navbarCollapse = function() {
				if ($("#mainNav").offset().top > 100) {
					$("#mainNav").addClass("navbar-shrink");
				} else {
					$("#mainNav").removeClass("navbar-shrink");
				}
			};
			// Collapse now if page is not at top
			navbarCollapse();
			// Collapse the navbar when page is scrolled
			$(window).scroll(navbarCollapse);
		});
		$(document).ready(function(){
			if ($('#scroll-top').length) {
				var scrollTrigger = 500,
					backToTop = function () {
						var scrollTop = $(window).scrollTop();
						if (scrollTop > scrollTrigger) {
							$('.scroll-top').fadeIn();
							$('#scroll-top').addClass('show');
						} else {
							$('.scroll-top').fadeOut();
							$('#scroll-top').removeClass('show');
						}
					};
				backToTop();
				$(window).on('scroll', function () {
					backToTop();
				});
				$('#scroll-top').on('click', function (e) {
					e.preventDefault();
					$('html,body').animate({
						scrollTop: 0
					}, 800);
				});
			}
		});

		return (
			<nav className="navbar navbar-expand-lg navbar-light navbar-header fixed-top bg-white-header bg-green-header" id="mainNav">
				<div className="container container-header">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<a className="navbar-brand" href="/">
						{/* <img src={logo} className="logo-header" /> */}
						Project
					</a>

					{/* <div className="select-header mobile">
						<span className="posSymbolMenu"></span>
						<DropDownMenu onChange={this.handleChange} >
							<MenuItem value={1} primaryText="Victoria." />
							<MenuItem value={2} primaryText="Queensland." />
							<MenuItem value={3} primaryText="South AustSralia." />
							<MenuItem value={4} primaryText="Western Australia." />
							<MenuItem value={5} primaryText="Northern Territory." />
							<MenuItem value={5} primaryText="Australian Capital Territory." />
						</DropDownMenu>
					</div> */}

					<div className="collapse navbar-collapse" id="navbarNavDropdown">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
							</li>
							{/* <li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="/shopping" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Shopping
				       			</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a className="dropdown-item" href="#">Restaurant</a>
									<a className="dropdown-item" href="#">Grocery</a>
								</div>
							</li> */}
							<li className="nav-item">
								<a className="nav-link" href="/shopping">Shopping</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="livraison.html">Livraison</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/coupons">Coupons</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="welcome-bonus.html">Welcome bonus</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="fidelity-bonus.html">Fidelity bonus</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="aide.html">Aide</a>
							</li>
							<RaisedButton 
								label="Contact" 
								buttonStyle={custom_ui.btn_w_md}
								href="#"
								className="btn_contact"
							/>
							{/* <li className="nav-item group">
								<a className="nav-link item-group-header" href="/signin">Sign in</a>
								<span className="breakline-header">/</span>
								<a className="nav-link item-group-header" href="/register">Register</a>
							</li> */}

							

							<li className="nav-item dropdown account" style={signStyle}>
								<a href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="acc-header dropdown-toggle">
									<div className="avatar-header" style={avatarImage}></div>
									<span className="nav-link avatar-name">Ed Sheeran</span>
								</a>

								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a className="dropdown-item" href="#">Account setting</a>
									<a className="dropdown-item" href="#">Change password</a>
									<a className="dropdown-item" href="#">Orders history</a>
									<a className="dropdown-item logout desktop" href="#">Log out</a>
								</div>
							</li>

							<li className="nav-item">
								<a className="nav-link logout mobile" href="#">Log out</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
