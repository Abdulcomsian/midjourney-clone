import * as Actions from "../actionType";
import axios from 'axios';
var base_url = "http://127.0.0.1:8000/api/";

export const login = (email, password) => {
    console.log('login Action')
    return async (dispatch, getState) => {
    };
};
export const register = (username, email, password, language, country) => {
  console.log('Register Action')
  return async (dispatch, getState) => {
  };
};