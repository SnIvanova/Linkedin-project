
export const GET_USER = 'GET_USER';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PROFILE_IMAGE = 'UPDATE_PROFILE_IMAGE';



export const getUserMe = (key) => {
  return async (dispatch) => {
    try {
      const res = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
        headers: {
          Authorization: key,
        },
      });

      if (res.ok) {
        const data = await res.json();
        console.log('eccoli', data);
        dispatch({
          type: GET_CURRENT_USER,
          payload: data,
        });
      } else {
        throw new Error('non poi entrare in questo profilo!');
      }
    } catch (error) {
      console.log('errore', error);
    }
  };
};

export const getUserProfile = (userId) => {
    return async (dispatch) => {
      try {
        const res = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}`, {
          headers: {
            Authorization: key,
          },
        });
  
        if (res.ok) {
          const data = await res.json();
          dispatch({
            type: GET_USER,
            payload: data,
          });
        } else {
          throw new Error('Error fetching user data');
        }
      } catch (error) {
        console.error(error);
      }
    };
  };

  export const updateProfile = (key, updatedData, ) => {
    return async (dispatch) => {
      try {
        const res = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: key,
            },
            body: JSON.stringify(updatedData),
          }
        );
  
        if (res.ok) {
          const data = await res.json();
  
          dispatch({
            type: UPDATE_PROFILE,
            payload: data,
          });
        } else {
          throw new Error('Error updating user profile');
        }
      } catch (error) {
        console.error(error);
      }
    };
  };

  export const updateProfileImage = (userId, updatedData, key) => {
    return async (dispatch) => {
      try {

        const formData = new FormData();
        formData.append('profile', updatedData);

        const res = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: key,
            },
            body: formData,
          }
        );
  
        if (res.ok) {
          const data = await res.json();
  
          dispatch({
            type: UPDATE_PROFILE_IMAGE,
            payload: data,
          });
        } else {
          throw new Error('Error updating user profile');
        }
      } catch (error) {
        console.error(error);
      }
    };
  };