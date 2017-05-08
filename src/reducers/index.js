import { combineReducers } from 'redux';

import page from './page';
import tabs from './tabs';
import popups from './popups';
import contactForm from './contactForm';

export default combineReducers({
    page,
    tabs,
    popups,
    contactForm
})
