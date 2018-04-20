import axios from "axios";

export default function fetchTweets(dispatch) {
	const request = axios.get("http://rest.learncode.academy/api/johnbob/friends");
	request
	.then((response) => {
		dispatch({
			type: 'FETCH_TWEETS_FULFILLED',
			payload: response.data
		})
	})
	.catch((error) => {
		dispatch({
			type: 'FETCH_TWEETS_REJECTED',
			payload: error
		})
	})

	return {
		type: "FETCH_TWEETS",
		payload: request
	};
}