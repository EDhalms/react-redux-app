import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Home from './Home';

import * as tabsActions from '../../../actions/tabs';
import * as popupsActions from '../../../actions/popups';

function mapStateToProps(state) {
    return {
        currentTab: state.tabs.homeTabs.currentTab,

        overLayIsOpen: state.popups.overLay.isOpen,
        welcomePopupIsOpen: state.popups.welcomePopup.isOpen
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleHomeTabs: tabsActions.toggleHomeTabs,

        handleOverlay: popupsActions.handleOverlay,
        handleWelcomePopup: popupsActions.handleWelcomePopup
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);


