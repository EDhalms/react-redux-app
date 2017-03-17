import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Home from './Home';

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);


