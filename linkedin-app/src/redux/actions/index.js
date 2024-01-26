// actions.js

export const GET_USER = 'GET_USER';

// Retrieve the key dynamically or pass it as a parameter
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
          type: GET_USER,
          payload: data,
        });
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!');
      }
    } catch (error) {
      console.log('errore', error);
    }
  };
};
