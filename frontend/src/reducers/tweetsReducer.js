export default function reducer (state={
	fetching: false,
	fetched: false,
	users: [],
	error: null,
}, action) {
	switch(action.type) {
		case "FETCH_TWEETS_PENDING" : {
			return {...state, fetching: true}
			break;
		}

		case "FETCH_TWEETS_REJECTED" : {
			return {...state, fetching: false, error: action.payload}
			break;
		}

		case "FETCH_TWEETS_FULFILLED" : {
			return {...state, fetching: false, fetched: true, users: action.payload}
			break;
		}

		default: break;
	}
	return state
}
