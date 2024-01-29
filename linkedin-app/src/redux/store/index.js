import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/user';
//import UserReducer from "../reducers/UserReducer";
import PostReducer from "../reducers/PostReducer";

const  bigReducer = combineReducers({
  user: userReducer,
  //user: UserReducer,
  
  post: PostReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
