import { combineReducers } from 'redux';

import page from './page';
import tabs from './tabs';
import popups from './popups';

export default combineReducers({
    page,
    tabs,
    popups
})
