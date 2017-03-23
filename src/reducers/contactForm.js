let initialState = {
    userData: {
        firstName: '',
        lastName: '',
        email: ''
    },
    errors: {
        firstNameIsValid: true,
        lastNameIsValid: true,
        emailIsValid: true
    },
    formSubmit: {
        formIsSubmitted: false
    }
};

export default function contactForm(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state, userData: action.userData
            };
        case 'VALIDATE_INPUT':
            return {
                ...state, errors: action.errors
            };
        case 'SUBMIT_FORM':
            return {
                ...state, formSubmit: action.status
            };
        default:
            return state;
    }
}
