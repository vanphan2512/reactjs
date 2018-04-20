import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import signinbck from './images/signin-bck.jpg';
import logoSign from './images/signlogo.svg';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';

function HideHeader() {
  	document.getElementsByClassName("bg-green-header")[0].style.opacity = 0;
  	document.getElementsByClassName("bg-green-header")[0].style.display = 'none';
}

function ResizeBck() {
	var heightWindow = window.innerHeight;
	var heightBck = (heightWindow) + 'px';
	var heightArea = document.getElementsByClassName("signin-area")[0].clientHeight;
	document.getElementById("signinbk").style.height = heightBck;
	
	if(heightArea > heightWindow) {
		document.getElementsByClassName("signin-area")[0].style.paddingTop = '80px';
		document.getElementsByClassName("signin-area")[0].style.paddingBottom = '80px';
	}
}

const signBck = {
	display: 'table',
	width: '100%',
	background: 'url('+ signinbck +')',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'top center',
};

const custom_ui = {
	logoSign: {
		display: 'block',
		margin: 'auto',
	},
	centerContent: {
		display: 'table-cell',
		verticalAlign: 'middle',
	},
	colorForm: {
		color: '#383838',
	},
	colorLableStyle: {
		color: '#ADADAD',
	},
	hintText: {
		color: '#ADADAD',
	},
	colorLableFocus: {
		color: '#8BC24A',
	},
	underFocus: {
		border: '1px solid #8BC24A',
	}, 
	styleField: {
		display:'block',
		width: 370,
	},
	checkbox: {
	    border: '1px solid #696969',
	    width: 17,
	    height: 17,
	},
	checkboxInput: {
		background: 'red',
	}
};

class Signin extends Component {  
  render() {
  	window.onload = function() {
  		HideHeader();
  		ResizeBck();
  	};

    return (
    	<div style={signBck} id="signinbk">
    		<div style={custom_ui.centerContent} className="signin-area">
    			<a href="/"><img src={logoSign} style={custom_ui.logoSign} /></a>
    			<div className="box-signin">
    				<p className="title">Log in</p>
    				<div>
    					<TextField
					      hintText="Your email"
					      floatingLabelText="Email"
					      floatingLabelStyle={custom_ui.colorLableStyle}
					      floatingLabelFocusStyle={custom_ui.colorLableFocus}
					      underlineFocusStyle={custom_ui.underFocus}
					      hintStyle={custom_ui.hintText}
					      inputStyle={custom_ui.colorForm}
					      style={custom_ui.styleField}
					      className="field-signin"
					    />
					    <TextField
					      hintText="Your password"
					      floatingLabelText="Password"
					      floatingLabelStyle={custom_ui.colorLableStyle}
					      floatingLabelFocusStyle={custom_ui.colorLableFocus}
					      underlineFocusStyle={custom_ui.underFocus}
					      hintStyle={custom_ui.hintText}
					      inputStyle={custom_ui.colorForm}
					      style={custom_ui.styleField}
					      className="field-signin"
					      type="password"
					    />
    				</div>
    				<div className="pass-signinarea">
    					<Checkbox
				          	label="Remember me"
				           	labelStyle={{color: '#696969', fontSize: 12, lineHeight: '17px', marginBottom: 0}}
                  			iconStyle={{fill: '#696969', width: 17, height: 17, marginRight: 12}}
				        />
    					<a href="#" className="link item">Forgot your password?</a>
    				</div>
    				<div className="sign-groupbtn">
    					<a href="#" className="button-link login">Login</a>
    					<span className="text">Or</span>
    					<a href="#" className="button-link face">LogIn with Facebook</a>
    				</div>
    				<a href="/register" className="link center">Don’t have an account? Create now</a>
    			</div>
    		</div>
    	</div>
    );
  }
}
export default Signin;

