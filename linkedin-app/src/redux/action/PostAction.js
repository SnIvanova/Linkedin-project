

/* AZIONI POST */
export const SET_POSTS = "SET_POST";
export const SET_SINGLE_POST = "SET_SINGLE_POST";
export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const SET_POST_ID = "SET_POST_ID";

/* EXPORT AZIONI POST */
export const setPosts = (data) => {
  return {
    type: SET_POSTS,
    payload: data,
  };
};

export const setSinglePost = (data) => {
  return {
    type: SET_SINGLE_POST,
    payload: data,
  };
};
export const setPostID = (id) => {
  return {
    type: SET_POST_ID,
    payload: id,
  };
};

export const addPost = (data) => {
  return {
    type: ADD_POST,
    payload: data,
  };
};

export const updatePost = (data) => {
  return {
    type: UPDATE_POST,
    payload: data,
  };
};

export const deleteThisPost = (i) => {
  return {
    type: DELETE_POST,
    payload: i,
  };
};

const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzYzIxYjMxYTczZjAwMTlkNWM5YTMiLCJpYXQiOjE3MDYyNzk0NTEsImV4cCI6MTcwNzQ4OTA1MX0.0eUz7rcVBe2uDNc802lP4Oha_gKaUSC_6_qKQPrtRUw';

/* GET - ALL POSTS */
export const getPosts = async (dispatch, getState) => {
  let state = getState();
  let userID = state.user.thisProfile.userID;
  console.log(userID);

  try {
    let response = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/`,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzYzIxYjMxYTczZjAwMTlkNWM5YTMiLCJpYXQiOjE3MDYyNzk0NTEsImV4cCI6MTcwNzQ4OTA1MX0.0eUz7rcVBe2uDNc802lP4Oha_gKaUSC_6_qKQPrtRUw',
        },
      }
    );
    if (response.ok) {
      let posts = await response.json();
      dispatch(setPosts(posts));
      console.log(posts);
    } else {
      console.log("Error has happened with the GET request");
    }
  } catch (error) {
    console.log("GET Fetch try failed,", error);
  }
};

/* POST - NEW POST*/
export const createPost = (postText, formData) => {
  return async (dispatch) => {
    let newPostData = {
      text: postText,
    };

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzYzIxYjMxYTczZjAwMTlkNWM5YTMiLCJpYXQiOjE3MDYyNzk0NTEsImV4cCI6MTcwNzQ4OTA1MX0.0eUz7rcVBe2uDNc802lP4Oha_gKaUSC_6_qKQPrtRUw',
          },
          body: JSON.stringify(newPostData),
        }
      );

      if (response.ok) {
        let newPost = await response.json();
        if (formData.get("post")) {
          let imgResponse = await fetch(
            `https://striveschool-api.herokuapp.com/api/posts/${newPost._id}`,
            {
              method: "POST",
              headers: {
                Authorization: API_KEY,
              },
              body: formData,
            }
          );
          if (imgResponse.ok) {
            console.log("Photo Uploaded succcessfully!");
          } else {
            console.log("There was an error uploading the photo.");
          }
        }
        dispatch(addPost(newPost));
      } else {
        console.log("Error has happened with the POST request");
      }
    } catch (error) {
      console.log("POST Fetch try failed,", error);
    }
  };
};

/* PUT - EDIT POST*/

export const editPost = (textPost, post_id, formData) => {
  const text = { text: textPost };
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/` + post_id,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzYzIxYjMxYTczZjAwMTlkNWM5YTMiLCJpYXQiOjE3MDYyNzk0NTEsImV4cCI6MTcwNzQ4OTA1MX0.0eUz7rcVBe2uDNc802lP4Oha_gKaUSC_6_qKQPrtRUw',
          },
          body: JSON.stringify(text),
        }
      );
      if (response.ok) {
        if (formData.get("post")) {
          console.log("Post successfully modified.");
          let imgResponse = await fetch(
            `https://striveschool-api.herokuapp.com/api/posts/${post_id}`,
            {
              method: "POST",
              headers: {
                Authorization: API_KEY,
              },
              body: formData,
            }
          );
          if (imgResponse.ok) {
            console.log("Photo Uploaded succcessfully!");
          } else {
            console.log("There was an error uploading the photo.");
          }
        }
      } else {
        alert("There was a problem modifying this Post");
      }
      dispatch(getPosts);
    } catch (error) {
      console.log("Error:", error);
    }
  };
};
/*DELETEPOST*/
export const deletePost = (postID) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + postID,
        {
          method: "DELETE",
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      if (response.ok) {
        dispatch(getPosts);
      }
    } catch (error) {}
  };
};
