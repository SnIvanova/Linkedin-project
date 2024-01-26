import { combineReducers, configureStore } from "@reduxjs/toolkit";

import UserReducer from "../reducers/UserReducer";
import ExperienceReducer from "../reducers/ExperienceReducer";
import PostReducer from "../reducers/PostReducer";

const bigReducer = combineReducers({
  user: UserReducer,
  experience: ExperienceReducer,
  post: PostReducer,
});
const store = configureStore({
  reducer: bigReducer,
});
export default store;
