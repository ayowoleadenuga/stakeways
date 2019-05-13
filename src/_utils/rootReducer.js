import { combineReducers } from "redux";

import { alert } from "../component/Alert/reducers/alert.reducer";
import { register } from "../component/AuthComponents/Register/reducers/register.reducer";
import { auth } from "../component/AuthComponents/Login/reducers/auth.reducer";


export default combineReducers({
  alert,
  register,
  auth
});
