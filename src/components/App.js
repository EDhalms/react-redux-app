import React, {Component} from 'react';

import Header from './templates/HeaderContainer';

import '../reset.css';
import '../App.css';
import './templates/Header.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header route={this.props.location.pathname} />
            {this.props.children}
        </div>
    );
  }
}

export default App;
