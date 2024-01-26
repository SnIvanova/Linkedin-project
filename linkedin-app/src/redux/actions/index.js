export const GET_USER = 'GET_USER';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';


const key = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2QyMGMwNTgzNTAwMTg1MjMwZjUiLCJpYXQiOjE3MDYxNzcxNDksImV4cCI6MTcwNzM4Njc0OX0.PHLuYb8nvyemb5r429V2sTosQ-mV9fJXAWr1yyjVp3g';

export const getUserMe = () => {
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

  export const updateProfile = (userId, updatedData) => {
    return async (dispatch) => {
      try {
        const res = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${userId}`,
          {
            method: 'PUT',
            headers: {
              
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