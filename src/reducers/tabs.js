let initialSate = {
    homeTabs: {
        currentTab: 0
    }
};

export default function tabs(state = initialSate, action) {
    switch (action.type) {
        case 'TOGGLE_HOME_TABS':
            return {
                ...state, homeTabs: {currentTab: action.tabs}
            };
        default:
            return state;
    }
}