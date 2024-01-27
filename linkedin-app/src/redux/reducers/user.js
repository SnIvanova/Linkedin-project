import { GET_USER, GET_CURRENT_USER, UPDATE_PROFILE, UPDATE_PROFILE_IMAGE } from '../actions/user';

const initialState = {
  userMe: null,
  profilePic: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userMe: action.payload || null,
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        userMe: action.payload || null,
      };

    case UPDATE_PROFILE:
      return {
        ...state,
        userMe: action.payload || null,
      };
    case UPDATE_PROFILE_IMAGE:
      return {
        ...state,
        profilePic: action.payload || null,
      };
    default:
      return state;
  }
};

export default userReducer;
