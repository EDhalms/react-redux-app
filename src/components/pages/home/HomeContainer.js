import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Home from './Home';

import * as tabsActions from '../../../actions/tabs';
import * as popupsActions from '../../../actions/popups';

function mapStateToProps(state) {
    return {
        currentTab: state.tabs.homeTabs.currentTab,
        
        singlePopupIsOpen: state.popups.singlePopup.isOpen
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleHomeTabs: tabsActions.toggleHomeTabs,
        
        handleSinglePopup: popupsActions.handleSinglePopup
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);


