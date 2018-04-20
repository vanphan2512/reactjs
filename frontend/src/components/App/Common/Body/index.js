import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Home from '../../Container/Home';
import Coupons from '../../Container/Coupons';
import Shopping from '../../Container/Shopping';
import Signin from '../../Container/Signin';
import Signup from '../../Container/Signup';
import NotFound from '../../Container/NotFound';
import Header from '../../Common/Header';
import TextField from 'material-ui/TextField';
import { Switch, Redirect, BrowserRouter as Router, Route } from 'react-router-dom'

const homeStyle = {
    paddingLeft: 0,
    paddingRight: 0,
};

class Body extends Component {
    render() {
        return (
            <div className="wrap-content">
                <Router path="/">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/signin" component={Signin} />
                        <Route path="/register" component={Signup} />
                        <Route path="/coupons" component={Coupons} />
                        <Route path="/shopping" component={Shopping} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
export default Body;