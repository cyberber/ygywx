import { combineReducers } from "redux";
import { counter } from './index';
import { auth } from './Auth.redux';
import { user } from './user.redux';


export default combineReducers({counter, auth, user})