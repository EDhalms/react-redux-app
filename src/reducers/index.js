import { combineReducers } from 'redux';

import page from './page';
import header from './header';
import tabs from './tabs';

export default combineReducers({
    page,
    header,
    tabs
})
