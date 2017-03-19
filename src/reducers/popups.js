let initialSate = {
    singlePopup: {
        isOpen: false
    }
};

export default function popups(state = initialSate, action) {
    switch (action.type) {
        case 'HANDLE_SINGLE_POPUP':
            return {
                ...state, singlePopup: {isOpen: action.status}
            };
        default:
            return state;
    }
}
