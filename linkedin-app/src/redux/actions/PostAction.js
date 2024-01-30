import { henKey } from "../../dati";


/* AZIONI POST */
export const SET_POSTS = "SET_POST";
export const SET_SINGLE_POST = "SET_SINGLE_POST";
export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const SET_POST_ID = "SET_POST_ID";

/* EXPORT AZIONI POST */
// export const setPosts = (data) => {
//   return
// };

// export const setSinglePost = (data) => {
//   return {
//     type: SET_SINGLE_POST,
//     payload: data,
//   };
// };
// export const setPostID = (id) => {
//   return {
//     type: SET_POST_ID,
//     payload: id,
//   };
// };

// export const addPost = (data) => {
//   return {
//     type: ADD_POST,
//     payload: data,
//   };
// };

// export const updatePost = (data) => {
//   return {
//     type: UPDATE_POST,
//     payload: data,
//   };
// };

// export const deleteThisPost = (i) => {
//   return {
//     type: DELETE_POST,
//     payload: i,
//   };
// };

const key = henKey

/* GET - ALL POSTS */
export const getPosts = () => {
  return async (dispatch) => {


    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: key,
          },
        }
      );
      if (response.ok) {
        let posts = await response.json();
        dispatch({
          type: SET_POSTS,
          payload: posts,
        });
        console.log(posts);
      } else {
        console.log("Error has happened with the GET request");
      }
    } catch (error) {
      console.log("GET Fetch try failed,", error);
    }
  }
}

/* GET - Post from ID */
export const getPost = (username) => {
  return async (dispatch) => {


    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: key,
          },
        }
      );
      if (response.ok) {
        let posts = await response.json();
        const userPosts = posts.filter(post => post.username === username) || null
        dispatch({
          type: SET_SINGLE_POST,
          payload: userPosts,
        });
        console.log(userPosts);
      } else {
        console.log("Error has happened with the GET request");
      }
    } catch (error) {
      console.error("GET Fetch try failed,", error);
    }
  }
}

/* POST - NEW POST*/
export const createPost = (postText, img) => {
  return async (dispatch) => {


    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: key
          },
          body: JSON.stringify({ text: postText }),
        }
      );

      if (response.ok && img) {
        console.log(response.json())
        const newPost = await response.json();
        const formData = new FormData();
        formData.append('profile', img);

        axios.post(`https://striveschool-api.herokuapp.com/api/posts/${newPost._id}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              "Authorization": key,
            }
          }).catch(error => console.error(error))
      }
    } catch (error) {
      console.log("POST Fetch try failed,", error);
    }
  };
};

/* PUT - EDIT POST*/

export const editPost = (textPost, post_id, img) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/` + post_id,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
            Authorization: key
          },
          body: JSON.stringify(textPost),
        }
      );
      if (response.ok) {
        const formData = new FormData();
        formData.append('post', img);

        axios.post(`https://striveschool-api.herokuapp.com/api/posts/${newPost._id}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              "Authorization": key,
            }
          }).catch(error => console.error(error))
      }
    } catch (error) {
      console.log("POST Fetch try failed,", error);
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
            Authorization: key,
          },
        }
      );
      if (response.ok) {
        console.log('post deleted')
      }
    } catch (error) { }
  };
};
