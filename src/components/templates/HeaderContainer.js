import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as pageActions from '../../actions/page';

import Header from './Header';

function mapStateToProps(state) {
    return {
        pageIsScrolling: state.page.pageIsScrolling
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        pageScroll: pageActions.pageScroll
    }, dispatch)
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
