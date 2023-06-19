import { combineReducers } from "redux";
import userReducer from './reducers/userReducers.js';


export default combineReducers({
    user: userReducer
});