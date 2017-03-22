import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Home from './Home';

import * as tabsActions from '../../../actions/tabs';
import * as popupsActions from '../../../actions/popups';

function mapStateToProps(state) {
    return {
        currentTab: state.tabs.homeTabs.currentTab,

        popups: state.popups,
        welcomePopupIsOpen: state.popups.welcomePopup.isOpen,
        firstStepPopup: state.popups.firstStepPopup.isOpen,
        secondStepPopup: state.popups.secondStepPopup.isOpen
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleHomeTabs: tabsActions.toggleHomeTabs,

        //handleOverlay: popupsActions.handleOverlay,
        handlePopup: popupsActions.handlePopup
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);


