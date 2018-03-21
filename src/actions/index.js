// we'll need axios
import axios from './axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// Action Types
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERRORS = 'ERRORS';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people`
// remember that now we have controll over our thunk-based

// function getData() {
//  return function (dispatch) { // Thunk is passing dispatch to this function

//    }
// }

// Action Creators

export const getChars = () => (dispatch) => {
    axios.get('https://swapi.co/api/people')
    .then(response => {
        dispatch({ type: FETCHED, chars: response.data.results})

    }).catch(err => {
        dispatch({ type: ERROR, message: 'Error fetching the data' })
    })
}

