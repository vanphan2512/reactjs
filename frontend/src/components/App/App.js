import React, { Component } from 'react';
import Header from './Common/Header';
import Body from './Common/Body';
import Footer from './Common/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css';
import './common.css';


const muiTheme = getMuiTheme({
  palette: {
    textColor: '#fff',
  }
});


class App extends Component {
  render() {
    return (
    	<MuiThemeProvider muiTheme={muiTheme}>
	      <div className="App">
		      <Header></Header>
          <Body></Body>
		      <Footer></Footer>
	      </div>
	    </MuiThemeProvider>
    );
  }
}

export default App;
