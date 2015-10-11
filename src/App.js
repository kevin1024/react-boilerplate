import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hello } from './actions';

class App extends Component {
  sayHello = () => {
    this.props.dispatch(hello());
  }
  render() {
    console.log(this.props);
    if (this.props.helloSaid) {
      return <p>hello world</p>
    }
    else {
      return <p style={styles.red}>
        not hello world
        <button onClick={this.sayHello}>Say hello</button>
      </p>
    }
  }
}

var styles = {
  hello: {
    backgroundColor: 'red',
  }
}

var select = function(state) {
  return state;
}

export default connect(select)(App);
