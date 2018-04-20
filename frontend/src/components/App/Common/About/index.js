import React, { Component } from 'react';
import styles from './index.css';
import image from './images/about_us.png';

class About extends Component {
    render() {
        return (
            <section className="row about">
                <div className="container">
                    <div className="col-md-12">
                        <h3 className="title">Simple & Easy</h3>
                        <p className="sub-title">The versatile data collection tool for professionals. Typeform makes asking easy & answering refreshing.</p>
                        <div className="about-img">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default About;            