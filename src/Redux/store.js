// reducers/index.js
import { combineReducers } from 'redux';
import { userReducer } from './Reducers/userReducere';

import { createStore, applyMiddleware } from 'redux';
const rootReducer = combineReducers({
    user: userReducer, // Add other reducers if needed
    // Add more reducers as needed
});
const store = createStore(
    rootReducer
);

export default store;