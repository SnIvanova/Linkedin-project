import { GET_USER } from '../actions';

const initialState = {
  userMe: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userMe: action.payload || null, 
      };

    default:
      return state;
  }
};

export default userReducer;
