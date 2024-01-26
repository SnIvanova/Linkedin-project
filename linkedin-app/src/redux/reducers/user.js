import { GET_USER, GET_CURRENT_USER, UPDATE_PROFILE } from '../actions/user';

const initialState = {
  userMe: null, 
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
    default:
      return state;
  }
};

export default userReducer;
