import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import bannerbck from './images/image.jpg';
import bannermbbck from './images/image.jpg';
import styles from './index.css';
import TextField from 'material-ui/TextField';
import Media from "react-media";
import OwlCarousel from 'react-owl-carousel';

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

const options = {
	animateOut: 'slideOutDown',
    animateIn: 'flipInX',
	navText: ['<', '>'],
	items: 1,
	dots: true,
	autoplay: true,
	navSpeed:500,
}

const Contentbanner = () => {
	return (
		<div className="row content">
			<OwlCarousel className="owl-theme" loop margin={10} nav {...options}>
				<div className="item col-mb-banner">
					<div className="info-banner">
						<p className="title">Save your thoughts, wherever you are </p>
						<p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
					</div>
					<img src={bannerbck} />
				</div>
				<div className="item col-mb-banner">
					<div className="info-banner">
						<p className="title">Save your thoughts, wherever you are 1</p>
						<p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
					</div>
					<img src={bannerbck} />
				</div>
				<div className="item col-mb-banner">
					<div className="info-banner">
						<p className="title">Save your thoughts, wherever you are 2</p>
						<p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
					</div>
					<img src={bannerbck} />
				</div>
				<div className="item col-mb-banner">
					<div className="info-banner">
						<p className="title">Save your thoughts, wherever you are 3</p>
						<p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
					</div>
					<img src={bannerbck} />
				</div>
				<div className="item col-mb-banner">
					<div className="info-banner">
						<p className="title">Save your thoughts, wherever you are 4</p>
						<p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
					</div>
					<img src={bannerbck} />
				</div>
				<div className="item col-mb-banner">
					<div className="info-banner">
						<p className="title">Save your thoughts, wherever you are 5</p>
						<p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
					</div>
					<img src={bannerbck} />
				</div>
			</OwlCarousel>
		</div>
	);
};

class BannerHome extends Component {
	render() {
		return (
			<Media query="(max-width: 991px)">
				{matches =>
					matches ? (
						<div  className="banner-area banner-home">
							<Contentbanner />
						</div>
					) : (
							<div className="banner-area banner-home">
								<Contentbanner />
							</div>
						)
				}
			</Media>
		);
	}
}
export default BannerHome;