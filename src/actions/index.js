// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people`
// remember that now we have controll over our thunk-based

// EXAMPLE of what is going on inside 'const getChars = () => dispatch {'
  // getChars is a function that returns a function that takes dispatch
  // as its argument...???
// function getData() {
//   return function (dispatch) { // Thunk is passing dispatch to this function

//   }
// }
// END GOAL:  The end goal of this is that NOW we can dispatch actions directly!

// RE-DESIGN OF ACTION-CREATORS for REDUX-THUNK

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

// This is our actionCreator.  Previously they would only return objects, but
// in this case it will return a function.
// Remember the idea of THUNK is that it provides access to dispatch. 
export const getChars = () => dispatch => {
  dispatch({ type: FETCHING });

  // QUESTION: What is happening here step-by-step?
  // ANSWER: Get some data from the Star Wars API using axios.  
  // Then somehow stop that action that is going to make this 
  // call from going to all of the reducers....???? -- is this
  // referring to catch? OR something else?
  axios
    .get('https://swapi.co/api/people')
    .then(response => {
      // This IS helpful -- looking at the console.log below, you can
      // see just how much information is flowing in from the Star Wars API.
      // All of that information is stored in 'response'.  (???) I guess SINCE
      // we are inside of the getChars actionCreator, we can dispatch the action
      // 'FETCHED' along with the necessary data.
      // QUESTION: WHERE CAN YOU ACCESS OTHER API's LIKE THIS ONE???
      console.log('response: ', response)
      dispatch({ type: FETCHED, chars: response.data.results });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Error fetching the data' });
    });
};

// QUESTION:  What was AJ refering to when he asked: 'what extension gives you that
// 'dim' shortcut. Answered at 1:07:34 -- the snippet???

// “Named Import”: {
//   “prefix”: “nim”,
//   “body”: “import { $1 } from ‘$2’;$0”
// },
// “Default Import”: {
//   “prefix”: “dim”,
//   “body”: “import $1 from ‘$2’;$0"
// },
// “CommonJS Required”: {
//   “prefix”: “rem”,
//   “body”: “const $1 = require(‘$1’);$0”
// }
