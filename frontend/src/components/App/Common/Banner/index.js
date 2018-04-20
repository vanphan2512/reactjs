import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import bannerbck from './images/banner.jpg';
import bannermbbck from './images/banner.jpg';
import styles from './index.css';
import TextField from 'material-ui/TextField';
import Media from "react-media";

const imageBanner = {
	backgroundImage: 'url(' + bannerbck + ')',
	backgroundRepeat: 'no-repeat',
	backgroundPositon: 'center',
	backgroundSize: 'cover',
};

const imageBannerMB = {
	backgroundImage: 'url(' + bannermbbck + ')',
	backgroundRepeat: 'no-repeat',
	backgroundPositon: 'center',
	backgroundSize: 'cover',
};

const colbanner = {
	display: 'table',
	margin: 'auto',
	paddingLeft: 0,
	paddingRight: 0,
}

const rowbanner = {
	marginLeft: 0,
	marginRight: 0,
}

const Contentbanner = () => {
	return (
		<div className="content">
			<p className="title">Coupons</p>
			<p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

			<div className="container">
				<div className="row">
					<div className="col-md-6 col-mb-banner" style={colbanner}>
						<form action="/" className="form-banner">
							<input type="text" name="searchbaner" placeholder="Search restaurant, grocery, food..." className="search-banner" />
							<input type="submit" value="" className="submit-srch-banner" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

class Banner extends Component {
	render() {
		return (
			<Media query="(max-width: 991px)">
				{matches =>
					matches ? (
						<div className="banner-area">
							<Contentbanner />
						</div>
					) : (
							<div className="banner-area">
								<Contentbanner />
							</div>
						)
				}
			</Media>
		);
	}
}
export default Banner;