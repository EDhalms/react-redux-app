let initialSate = {
    welcomePopup: {
        isOpen: false
    },
    firstStepPopup: {
        isOpen: false
    },
    secondStepPopup: {
        isOpen: false
    }
};

export default function popups(state = initialSate, action) {
    switch (action.type) {
        case 'HANDLE_WELCOME_POPUP':
            return {
                ...state, welcomePopup: {isOpen: action.status}
            };
        case 'HANDLE_FIRST_STEP_POPUP':
            return {
                ...state, firstStepPopup: {isOpen: action.status}
            };
        case 'HANDLE_SECOND_STEP_POPUP':
            return {
                ...state, secondStepPopup: {isOpen: action.status}
            };
        default:
            return state;
    }
}
