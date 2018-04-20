import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.css';
import signupbck from './images/signup-bck.png';
import logoSign from './images/signlogo.svg';
import TextField from 'material-ui/TextField';

function HideHeader() {
    document.getElementsByClassName("bg-green-header")[0].style.opacity = 0;
    document.getElementsByClassName("bg-green-header")[0].style.display = 'none';
}

function ResizeBck() {
  var heightWindow = window.innerHeight;
  var heightBck = (heightWindow) + 'px';
  var heightArea = document.getElementsByClassName("signup-area")[0].clientHeight;
  document.getElementById("signupbk").style.height = heightBck;

  if(heightArea > heightWindow) {
    document.getElementsByClassName("signup-area")[0].style.paddingTop = '80px';
    document.getElementsByClassName("signup-area")[0].style.paddingBottom = '80px';
  }
}

const signBck = {
  display: 'table',
  width: '100%',
  background: 'url('+ signupbck +')',
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

class Signup extends Component {  
  render() {
    window.onload = function() {
      HideHeader();
      ResizeBck();
    };

    return (
      <div style={signBck} id="signupbk">
        <div style={custom_ui.centerContent} className="signup-area">
          <a href="/"><img src={logoSign} style={custom_ui.logoSign} /></a>
          <div className="box-signup">
            <p className="title">Sign up</p>
            <div>
              <TextField
                hintText="Your Name"
                floatingLabelText="Name"
                floatingLabelStyle={custom_ui.colorLableStyle}
                floatingLabelFocusStyle={custom_ui.colorLableFocus}
                underlineFocusStyle={custom_ui.underFocus}
                hintStyle={custom_ui.hintText}
                inputStyle={custom_ui.colorForm}
                style={custom_ui.styleField}
                className="field-signup"
              />
              <TextField
                hintText="Your email"
                floatingLabelText="Email"
                floatingLabelStyle={custom_ui.colorLableStyle}
                floatingLabelFocusStyle={custom_ui.colorLableFocus}
                underlineFocusStyle={custom_ui.underFocus}
                hintStyle={custom_ui.hintText}
                inputStyle={custom_ui.colorForm}
                style={custom_ui.styleField}
                className="field-signup"
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
                className="field-signup"
                type="password"
              />
              <TextField
                hintText="Your password confirm"
                floatingLabelText="Password confirm"
                floatingLabelStyle={custom_ui.colorLableStyle}
                floatingLabelFocusStyle={custom_ui.colorLableFocus}
                underlineFocusStyle={custom_ui.underFocus}
                hintStyle={custom_ui.hintText}
                inputStyle={custom_ui.colorForm}
                style={custom_ui.styleField}
                className="field-signup"
                type="password"
              />
            </div>
            <div className="sign-groupbtn">
              <a href="#" className="button-link login">CREATE PROFILE</a>
              <span className="text">Or</span>
              <a href="#" className="button-link face">LogIn with Facebook</a>
            </div>
            <p className="text-normal">By signing up, I agree to <a href="#" className="link-text">Fixer's Terms & Conditions,</a> <a href="#" className="link-text">Privacy Policy</a> and <a href="#" className="link-text">Community Guidelines</a>.</p>
            <a href="/signin" className="link center">Already have an account? Login here</a>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;

