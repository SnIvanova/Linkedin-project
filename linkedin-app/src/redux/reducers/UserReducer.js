import {
  RESET_THIS_PROFILE,
  SET_MY_PROFILE,
  SET_OTHER_PEOPLE,
  SET_THIS_PROFILE,
  SET_USER_ID,
} from "../action/UserAction";

const initialState = {
  myProfile: {}, //fetch profile/me
  otherPeople: [], //fetch profile/
  thisProfile: {
    userID: "643cf46a186a8700143867b7",
    profile: {},
  }, //fetch profile/{userID}
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_PROFILE:
      return {
        ...state,
        myProfile: action.payload,
      };
    case SET_OTHER_PEOPLE:
      return {
        ...state,
        otherPeople: action.payload,
      };
    case SET_USER_ID:
      return {
        ...state,
        thisProfile: { ...state.thisProfile, userID: action.payload },
      };
    case SET_THIS_PROFILE:
      return {
        ...state,
        thisProfile: {
          ...state.thisProfile.userID,
          thisProfile: action.payload,
        },
      };
    case RESET_THIS_PROFILE:
      return {
        ...state,
        thisProfile: { userID: null, thisProfile: {} },
      };
    default:
      return state;
  }
};
export default UserReducer;
