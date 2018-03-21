import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index

import { getChars } from '../actions';

class App extends Component {
  componentDidMount() {
    // call our actionCreator
    this.props.getChars();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.height}>
                          <b>{char.name}</b><br/>
                          {char.height}<br/>
                          {char.mass}
                     </li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
// Remember that initial state is set in reducers

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    chars: state.chars,
    error: state.errorMessage,
    // Just trying this out.  So you can see that with this, and the initial
    // state array 'bubblegumFlavors' defined in reducers, you will see this
    // as a prop.
    bubblegumFlavors: state.bubblegumFlavors,
    lizFavMovie: state.lizFavMovie,
  };
};

export default connect(mapStateToProps, { getChars })(App);
