import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import imageMost from './images/icon-group.png';
import OwlCarousel from 'react-owl-carousel';


import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const options = {
	items: 1,
	nav: false,
	dots: true,
	autoplay: false,
	navSpeed: 200,

}

const custom_ui = {
    rowColor: {
        color: "#000",
    },
    rowBorder: {
        border: "none",
    },
    textRightRow: {
        textAlign: "right",
    },
    heightAuto: {
        height: 'auto',
    },
    textTitle: {
        color: '#689F39',
        fontSize: 18,
        lineHeight: '21px',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
    },
    textNormal: {
        color: '#696969',
        fontSize: 13,
        lineHeight: '15px',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 15,
    },
    textBold: {
        color: '#383838',
        fontWeight: 700,
        fontSize: 12,
        lineHeight: '14px',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
    },
    voteStyle: {
        color: '#808080',
        fontWeight: 700,
        fontSize: 16,
        lineHeight: '19px',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 15,
        paddingBottom: 15,
        width: 85,
        borderLeft: '1px solid #DEDEDE',
        cursor: 'pointer',
    },
    borderTable: {
        border: '1px solid #DEDEDE',
    },
    borderTopTable: {
        borderTop: '1px solid #DEDEDE',
    },
    voteimage: {
        marginRight: 8,
        cursor: 'pointer',
    }
};

class MostChoice extends Component {
    render() {
        return (
            <section className="notre-offre">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="section-heading section-title text-center">Agency happenings, press on branding</h2>
                            <p className="sub-title text-center">The versatile data collection tool for professionals.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="review m-auto">
                            <div className="slide-offre">
                                <OwlCarousel className="owl-theme" loop margin={10} nav {...options}>
                                    <div className="item">
                                        <div className="thumbnail">
                                            <img src={imageMost} />
                                        </div>
                                        <div className="desc">
                                            <h3>Slide Sequence And Destinations 1</h3>
                                            <p>Most users won’t see all of the slides in a home page carousel, even one that auto-rotates. They simply don’t stick around the home page long enough.</p>
                                            <a href="#" className="learn-more">Learn more</a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumbnail">
                                            <img src={imageMost} />
                                        </div>
                                        <div className="desc">
                                            <h3>Slide Sequence And Destinations 2</h3>
                                            <p>Most users won’t see all of the slides in a home page carousel, even one that auto-rotates. They simply don’t stick around the home page long enough.</p>
                                            <a href="#" className="learn-more">Learn more</a>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="thumbnail">
                                            <img src={imageMost} />
                                        </div>
                                        <div className="desc">
                                            <h3>Slide Sequence And Destinations 3</h3>
                                            <p>Most users won’t see all of the slides in a home page carousel, even one that auto-rotates. They simply don’t stick around the home page long enough.</p>
                                            <a href="#" className="learn-more">Learn more</a>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default MostChoice;