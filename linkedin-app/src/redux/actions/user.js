import { henKey, keyIvanova  } from "../../dati";
import axios from 'axios'
export const GET_USER = 'GET_USER';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PROFILE_IMAGE = 'UPDATE_PROFILE_IMAGE';

const key = henKey


export const getUserMe = () => {

//export const key = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4M2QyMGMwNTgzNTAwMTg1MjMwZjUiLCJpYXQiOjE3MDYxNzcxNDksImV4cCI6MTcwNzM4Njc0OX0.PHLuYb8nvyemb5r429V2sTosQ-mV9fJXAWr1yyjVp3g'

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


  export const updateProfile = (updatedData) => {

  //export const updateProfile = (key, updatedData, ) => {

    return async (dispatch) => {
      try {
        const res = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/`,
          {
            method: 'PUT',
            body: JSON.stringify(updatedData),
            headers: {
              'Content-Type': 'application/json',
              Authorization: key,
            },
          }
        );
  
        console.log('Response:', res);
  
        if (res.ok) {
          const data = await res.json();
  
          dispatch({
            type: UPDATE_PROFILE,
            payload: data,
          });
        } else {
          const errorData = await res.json();
          console.error('error update: ' + errorData)
          throw new Error('Error updating user profile');
        }
      } catch (error) {
        console.error(error);
      }
    };
  };


  export const updateProfileImage = (userId, updatedData) => {
      const formData = new FormData();
      formData.append('profile', updatedData);
      axios.post(`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
      formData,
      {headers: {
                 'Content-Type': 'multipart/form-data',
                 "Authorization": key,
       }}).catch(error => console.error(error) )
      
  } 


  
  /*export const updateProfileImage = (userId, updatedData, key) => {
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
  };*/


