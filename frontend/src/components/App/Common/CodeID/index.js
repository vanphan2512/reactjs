import React, { Component } from 'react';
import fetchTweets from "../../../../actions/tweetsActions.js"
import { connect } from "react-redux";
import { Button } from 'react-bootstrap';

class CodeID extends Component {
  componentWillMount() {
  	this.props.dispatch(fetchTweets);
  }

  render() {
  	const userArr = this.props.usersArr;
  	return (
  		<div className="container">
        <div className="row">
    			{userArr.map(item => (
    				<div className="col-md-4" key={item.id}>
              <input type="text" defaultValue={item.id}/>
              <input type="text" defaultValue={item.name}/>
              <input type="text" defaultValue={item.age}/>
              <br/>
              <Button bsStyle="primary">Primary</Button>
            </div>
    			))}
        </div>
  		</div>
  	);
  }
}

function mapStateToProps (state) {
  return { 
  	tweets: state.tweets,
  	usersArr: state.tweets.users
  }
}

CodeID = connect(mapStateToProps)(CodeID);
export default CodeID;
