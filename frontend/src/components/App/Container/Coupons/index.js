import React, { Component } from 'react';
import productImg4 from './images/product4.jpg';
import productImg3 from './images/product3.jpg';
import productImg2 from './images/product2.jpg';
import productImg1 from './images/product.jpg';
import LinesEllipsis from 'react-lines-ellipsis'
import styles from './index.css';



class Coupons extends Component {
    render() {
        return (
            <div>
                <section className="header-banner-page">
                    <div className="container">
                        <div className="row colbanner">
                            <div className="frm-header">
                                <div className="col-12 col-md-12 section-title text-center">
                                    <h3 className="title">Coupons</h3>
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
                <section className="section-page product-coupons">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-4 product_single">
                                <div className="product">
                                    <div className="product-image" style style={{ background: "url(" + productImg1 + ")" }}>
                                    </div>
                                    <div className="product-desc">
                                        <h3><a href="#">Adding Server Logic</a></h3>
                                        <p>
                                            <LinesEllipsis
                                            text='Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously'
                                            maxLine='3'
                                            ellipsis=' ...'
                                            trimRight
                                            basedOn='letters'
                                            />
                                        </p>
                                        <a href="#" className="view-more">View more <i className="fa fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 product_single">
                                <div className="product">
                                    <div className="product-image" style style={{ background: "url(" + productImg1 + ")" }}>
                                    </div>
                                    <div className="product-desc">
                                        <h3><a href="#">Adding Server Logic</a></h3>
                                        <p>
                                            <LinesEllipsis
                                            text='Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously'
                                            maxLine='3'
                                            ellipsis=' ...'
                                            trimRight
                                            basedOn='letters'
                                            />
                                        </p>
                                        <a href="#" className="view-more">View more <i className="fa fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 product_single">
                                <div className="product">
                                    <div className="product-image" style style={{ background: "url(" + productImg1 + ")" }}>
                                    </div>
                                    <div className="product-desc">
                                        <h3><a href="#">Adding Server Logic</a></h3>
                                        <p>
                                            <LinesEllipsis
                                            text='Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously'
                                            maxLine='3'
                                            ellipsis=' ...'
                                            trimRight
                                            basedOn='letters'
                                            />
                                        </p>
                                        <a href="#" className="view-more">View more <i className="fa fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 product_single">
                                <div className="product">
                                    <div className="product-image" style style={{ background: "url(" + productImg1 + ")" }}>
                                    </div>
                                    <div className="product-desc">
                                        <h3><a href="#">Adding Server Logic</a></h3>
                                        <p>
                                            <LinesEllipsis
                                            text='Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously'
                                            maxLine='3'
                                            ellipsis=' ...'
                                            trimRight
                                            basedOn='letters'
                                            />
                                        </p>
                                        <a href="#" className="view-more">View more <i className="fa fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 product_single">
                                <div className="product">
                                    <div className="product-image" style style={{ background: "url(" + productImg1 + ")" }}>
                                    </div>
                                    <div className="product-desc">
                                        <h3><a href="#">Adding Server Logic</a></h3>
                                        <p>
                                            <LinesEllipsis
                                            text='Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously'
                                            maxLine='3'
                                            ellipsis=' ...'
                                            trimRight
                                            basedOn='letters'
                                            />
                                        </p>
                                        <a href="#" className="view-more">View more <i className="fa fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 product_single">
                                <div className="product">
                                    <div className="product-image" style style={{ background: "url(" + productImg1 + ")" }}>
                                    </div>
                                    <div className="product-desc">
                                        <h3><a href="#">Adding Server Logic</a></h3>
                                        <p>
                                            <LinesEllipsis
                                            text='Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously Cloud Functions give you a nice spot to decouple different parts of your application and have them asynchronously'
                                            maxLine='3'
                                            ellipsis=' ...'
                                            trimRight
                                            basedOn='letters'
                                            />
                                        </p>
                                        <a href="#" className="view-more">View more <i className="fa fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Coupons;