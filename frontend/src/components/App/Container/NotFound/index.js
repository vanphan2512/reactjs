import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';

class NotFound extends Component {  
  render() {
    return (
    	<div className="row page-not-found">
    		<div className="col-md-6 content">
              	<h3 className="title">4<span>0</span>4</h3>
              	<p className="short-title">Sorry! The page you were looking for could not be found.</p>
              	<p className="desc">You have been tricked into click on a link that can not be found. Please check the url or go to <a href="/">home page</a> and see if you can locate what you are looking for </p>
    		</div>
    	</div>
    );
  }
}
export default NotFound;