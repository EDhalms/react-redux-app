let initialState = {
    pageIsScrolling: false
};

export default function page(state = initialState, action) {
    switch (action.type) {
        case 'PAGE_SCROLL':
            return {
                ...state, pageIsScrolling: action.status
            };
        default:
            return state;
    }
}
