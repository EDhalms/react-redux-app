import React, {Component} from 'react';

import Header from './templates/HeaderContainer';

import '../reset.css';
import '../App.css';
import './templates/Header.css';//import this css right here for the connection sequence of styles

class App extends Component {
  render() {
    return (
        <div className="g-page">
            <Header route={this.props.location.pathname} />
            {this.props.children}
        </div>
    );
  }
}

export default App;
