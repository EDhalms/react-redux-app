import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Home from './Home';

import './Home.css';

import * as tabsActions from '../../../actions/tabs';

function mapStateToProps(state) {
    return {
        currentTab: state.tabs.homeTabs.currentTab
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleHomeTabs: tabsActions.toggleHomeTabs
    }, dispatch)
}

class HomeContainer extends Component {

    constructor(props) {
        super(props);
    };

    render() {

        return (
            <Home
                currentTab={this.props.currentTab}
                toggleHomeTabs={this.props.toggleHomeTabs}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);


