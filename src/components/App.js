import React, {Component} from 'react';

import Header from './templates/Header';

import '../reset.css';
import '../App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <h1>App - root</h1>
            {this.props.children}
        </div>
    );
  }
}

export default App;
