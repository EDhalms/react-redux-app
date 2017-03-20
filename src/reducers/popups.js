let initialSate = {
    welcomePopup: {
        isOpen: false
    },
    overLay: {
        isOpen: false
    }
};

export default function popups(state = initialSate, action) {
    switch (action.type) {
        case 'HANDLE_WELCOME_POPUP':
            return {
                ...state, welcomePopup: {isOpen: action.status}
            };
        case 'HANDLE_OVERLAY':
            return {
                ...state, overLay: {isOpen: action.status}
            };
        default:
            return state;
    }
}
