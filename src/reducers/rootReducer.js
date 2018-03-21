import { FETCHED, FETCHING, ERROR } from '../actions';

const initialState = {
  chars: [],
  // QUESTION: What is going on here?
  fetching: false,
  error: null,
  bubblegumFlavors: [
    'blueberry',
    'strawberry',
  ]
};

// Before we had just 'state = {}', however, in this, looking at the App component
// you see there that we are looking for this.props.fetching.  Thus, fetching must
// be given a value in order for anything to run - otherwise you will just get the
// React Logo { fetching: true }.  Also, you can see that if this.props.fetching is
// set to 'false', then you will need a reference to an empty 'chars' array.
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      // ES6 spread op allows you to use this very clean syntax to quickly update
      // key values in your state object.
      // QUESTION: What does action refer to here???
      // ANSWER: On a high level I understand that it must be the data from SWAPI
      // but how??? How does switch gain access to action?  I understand initialState
      // is in scope because it is in the same document, but action???
      return { ...state, fetching: true };
    case ERROR:
      return { ...state, error: action.errorMessage };
    case FETCHED:
      return { ...state, chars: action.chars, fetching: false, error: null };
    default:
      return state;
  }
};
