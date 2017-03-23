import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as contactFormActions from '../../../actions/contactForm';

import Contact from './Contact';

function mapStateToProps(state) {
    return {
        userData: state.contactForm.userData,
        errors: state.contactForm.errors,
        formSubmit: state.contactForm.formSubmit
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        changeInput: contactFormActions.changeInput,
        validateInput: contactFormActions.validateInput,
        submitForm: contactFormActions.submitForm
    }, dispatch)
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact);

