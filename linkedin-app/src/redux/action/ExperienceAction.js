/* AZIONI EXPERIENCE */
export const SET_EXPERIENCES = "SET_EXPERIENCES";
export const SET_SINGLE_EXPERIENCE = "SET_SINGLE_EXPERIENCE";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";
export const SET_NEW_EXP = "SET_NEW_EXP";
export const SET_EXP_ID = "SET_EXP_ID";
export const SET_TO_UPDATE = "SET_TO_UPDATE";

/* EXPORT AZIONI EXPERIENCE */
export const setExperiences = (data) => {
  return {
    type: SET_EXPERIENCES,
    payload: data,
  };
};

export const setSingleExperience = (data) => {
  return {
    type: SET_SINGLE_EXPERIENCE,
    payload: data,
  };
};
export const setExpID = (id) => {
  return {
    type: SET_EXP_ID,
    payload: id,
  };
};

export const addExperience = (data) => {
  return {
    type: ADD_EXPERIENCE,
    payload: data,
  };
};

export const setNewExp = (data) => {
  return {
    type: SET_NEW_EXP,
    payload: data,
  };
};

export const deleteExperience = (i) => {
  return {
    type: DELETE_EXPERIENCE,
    payload: i,
  };
};
export const setToUpdate = (data) => {
  return {
    type: SET_TO_UPDATE,
    payload: data,
  };
};

const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDNjZjQ2YTE4NmE4NzAwMTQzODY3YjciLCJpYXQiOjE2ODE3MTYzMzAsImV4cCI6MTY4MjkyNTkzMH0.W_8jJorRnuOYGtkVo1rTmrMx0Jj18Heth2NyOzc8ytc";
/* GET - ALL EXPERIENCE*/
export const getUserExperience = async (dispatch, getState) => {
  let state = getState();
  let userID = state.user.myProfile._id;

  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        userID +
        "/experiences",

      {
        headers: {
          "Content-type": "application/json",
          Authorization: API_KEY,
        },
      }
    );
    if (response.ok) {
      let experiences = await response.json();
      dispatch(setExperiences(experiences));

      //console.log(experiences);
    } else {
      console.log("Error has happened with the GET request");
    }
  } catch (error) {
    console.log("GET Fetch try failed,", error);
  }
};

/* POST - NEW EXPERIENCE*/
export const createExperience = async (dispatch, getState) => {
  let state = getState();
  let userID = state.user.myProfile._id;
  let newExp = state.experience.newExp;
  // console.log(JSON.stringify(singleExperience));

  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        userID +
        "/experiences",
      {
        method: "POST",
        headers: {
          Authorization: API_KEY,
          "Content-type": "application/json",
        },

        body: JSON.stringify(newExp),
      }
    );

    if (response.ok) {
      let data = await response.json();
      // console.log(data);
      dispatch(getUserExperience);
      dispatch(
        setSingleExperience({
          role: "",
          company: "",
          startDate: "",
          endDate: null,
          description: "",
          area: "",
        })
      );
      dispatch(
        setNewExp({
          role: "",
          company: "",
          startDate: "",
          endDate: null,
          description: "",
          area: "",
        })
      );
    } else {
      console.log("Error has happened with the POST request");
    }
  } catch (error) {
    console.log("POST Fetch try failed,", error);
  }
};

// GET - SPECIFIC EXPERIENCE
export const getSingleExperience = async (dispatch, getState, expId) => {
  let state = getState();
  let userID = state.user.myProfile._id;
  let expID = state.experience.IDs.expID;

  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${expID}`,
      {
        headers: {
          "Content-type": "application/json",

          Authorization: API_KEY,
        },
      }
    );

    if (response.ok) {
      let experience = await response.json();
      dispatch(setSingleExperience(experience));
    } else {
      console.log("Error has happened with the GET-SPECIFIC request");
    }
  } catch (error) {
    console.log("GET-SPECIFIC Fetch try failed,", error);
  }
};

// PUT - MODIFY EXPERIENCE
export const editExperience = async (dispatch, getState) => {
  let state = getState();
  let userID = state.user.myProfile._id;
  let expID = state.experience.IDs.expID;
  let expToUpdate = state.experience.toUpdate;
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${expID}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: API_KEY,
        },
        body: JSON.stringify(expToUpdate),
      }
    );

    if (response.ok) {
      let updatedExperience = await response.json();
      console.log(updatedExperience);
    } else {
      console.log("Error has happened with the PUT request");
    }
  } catch (error) {
    console.log("PUT Fetch try failed,", error);
  }
};

// DELETE - DELETE EXPERIENCE
export const removeExperience = async (dispatch, getState) => {
  let state = getState();
  let userID = state.user.myProfile._id;
  let expID = state.experience.IDs.expID;
  let listExp = state.experience.experiences;
  //console.log(userID, expID);
  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences/${expID}`,
      {
        method: "DELETE",
        headers: {
          Authorization: API_KEY,
        },
      }
    );

    if (response.ok) {
      for (let i = 0; i < listExp.length; i++) {
        //console.log(listExp);
        //console.log(listExp[i]._id, expID);
        if (listExp[i]._id === expID) {
          dispatch(deleteExperience(i));

          console.log(i);
        }
      }
    } else {
      console.log("Error has happened with the DELETE request");
    }
  } catch (error) {
    console.log("DELETE Fetch try failed,", error);
  }
};
