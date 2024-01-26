import { getUserExperience } from "./ExperienceAction";

/* AZIONI PROFILE */
export const SET_MY_PROFILE = "SET_MY_PROFILE";
export const SET_OTHER_PEOPLE = "SET_OTHER_PEOPLE";
export const SET_THIS_PROFILE = "SET_THIS_PROFILE";
export const SET_USER_ID = "SET_USER_ID";
export const RESET_THIS_PROFILE = "RESET_THIS_PROFILE";

/* EXPORT AZIONI PROFILE */
export const setMyProfile = (data) => {
  return {
    type: SET_MY_PROFILE,
    payload: data,
  };
};
export const setOtherPeople = (data) => {
  return {
    type: SET_OTHER_PEOPLE,
    payload: data,
  };
};
export const setThisUserID = (id) => {
  return {
    type: SET_USER_ID,
    payload: id,
  };
};
export const setThisProfile = (data) => {
  return {
    type: SET_THIS_PROFILE,
    payload: data,
  };
};
export const resetThisProfile = () => {
  return {
    type: RESET_THIS_PROFILE,
  };
};

const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjQ2YTE4NmE4NzAwMTQzODY3YjciLCJpYXQiOjE2ODE3MTYzMzAsImV4cCI6MTY4MjkyNTkzMH0.W_8jJorRnuOYGtkVo1rTmrMx0Jj18Heth2NyOzc8ytc";
export const getUserProfile = async (dispatch, getState) => {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/me`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: API_KEY,
        },
      }
    );
    if (response.ok) {
      let details = await response.json();
      dispatch(setMyProfile(details));
      dispatch(getUserExperience);
      //console.log(details);
    } else {
      console.log("Error has happened with the request");
    }
  } catch (error) {
    console.log("Fetch try failed,", error);
  }
};
export const getAllProfile = async (dispatch) => {
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );
    if (response.ok) {
      let details = await response.json();
      dispatch(setOtherPeople(details.slice(0, 10)));
      //  console.log(details);
    } else {
      console.log("Error has happened with the request");
    }
  } catch (error) {
    console.log("Fetch try failed,", error);
  }
};
export const getThisProfile = async (dispatch, getState) => {
  let state = getState();
  let userID = state.user.thisProfile.userID;
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/` + userID,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );
    if (response.ok) {
      let details = await response.json();
      dispatch(setThisProfile(details));
      //console.log(details);
    } else {
      console.log("Error has happened with the request");
    }
  } catch (error) {
    console.log("Fetch try failed,", error);
  }
};
export const editProfileInfo = (newProfile) => {
  console.log("ciao");
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "PUT",
          headers: {
            Authorization: API_KEY,
          },
          body: JSON.stringify(newProfile),
        }
      );
      if (response.ok) {
        console.log("profilo aggiornato");
        dispatch(getUserProfile);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const editProfileImage = (formData, userID) => {
  return async (dispatch) => {
    try {
      let imgResponse = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userID}/picture`,
        {
          method: "POST",
          headers: {
            Authorization: API_KEY,
          },
          body: formData,
        }
      );
      if (imgResponse.ok) {
        dispatch(getUserProfile);
        console.log("Photo Uploaded succcessfully!");
      } else {
        console.log("There was an error uploading the photo.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
