import * as ActionTypes from './ActionTypes';
import { redirectTo } from '../App/Helper';
import axios from 'axios';

// Function to update username value.
export const onChangeUsername = event => {
  return {
    type: ActionTypes.ON_CHANGE_USERNAME,
    payload: event.target.value,
  };
};

// Function to update password value.
export const onChangePassword = event => {
  return {
    type: ActionTypes.ON_CHANGE_PASSWORD,
    payload: event.target.value,
  };
};

// Action to validate user and add it to localStorage.
export const loginUser = (username, password) => {
  return dispatch => {
    let isUserFound = false;
    return axios
      .get('https://swapi.co/api/people/', {
        params: {
          search: username,
        },
      })
      .then(function(response) {
        let userList = response.data.results;
        let userInfo = {};
        userList.map(value => {
          if (value.name === username && value.birth_year === password) {
            isUserFound = true;
            userInfo = value;
          }
          return null;
        });
        if(!isUserFound) {
            userInfo = 'Username and Password is not correct.';
            dispatch(loginUserFailure(userInfo));
        } else {
            dispatch(loginUserSuccess(userInfo));
            redirectTo('home');
        }
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
      })
      .catch(function(error) {
        console.log(error);
      });
  };
};

// Fucntion to update user after successfull login.
export function logoutUserSuccess(user) {
  sessionStorage.removeItem('userInfo');
  return {
    type: ActionTypes.USER_LOGOUT_SUCCESS,
    payload: user,
  };
}

// Fucntion to update user after successfull login.
export function loginUserSuccess(user) {
  return {
    type: ActionTypes.USER_LOGIN_SUCCESS,
    payload: user,
  };
}

// Fucntion to update error after failure login.
export function loginUserFailure(error) {
  return {
    type: ActionTypes.USER_LOGIN_FAILURE,
    payload: error,
  };
}
