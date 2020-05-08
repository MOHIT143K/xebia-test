// Node Module Imports
import { combineReducers } from 'redux';

// Reducers Imports
import home from '../Home/Reducer';

/* Combines the sub-state of all the modules and returns the application state */
export default combineReducers({
    home
});