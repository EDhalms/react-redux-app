import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Provider} from 'react-redux';

/*components*/
import App from './components/App';
import Home from './components/pages/home/HomeContainer';
import About from './components/pages/about/AboutContainer';
import Blog from './components/pages/blog/BlogContainer';
import Contact from './components/pages/contact/ContactContainer';
/*components*/

import {store} from './store/store';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home}/>
                <Route path='about' component={About}/>
                <Route path='blog' component={Blog}/>
                <Route path='contact' component={Contact}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

