let initialState = {
    bgColor: 'transparent'
};

export default function header(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_BG_COLOR':
            return {
                ...state, ...{bgColor: action.bgColor}
            };
        default:
            return state;
    }
}