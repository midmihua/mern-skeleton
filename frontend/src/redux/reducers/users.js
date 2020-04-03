import restapi from 'utils/restapi';

import { baseErrorsHandlerDecorator } from './common';

const initialState = {
  me: null,
  meError: null,
  registrateUserSuccess: null,
  registrateUserError: null,
  accessToken: null,
  loginError: null,
  loggingOut: false,
};


const REGISTRATE_USER_SUCCESS = 'REGISTRATE_USER_SUCCESS';
const REGISTRATE_USER_ERROR = 'REGISTRATE_USER_ERROR';
const CLEAR_REGISTRATE_USER = 'CLEAR_REGISTRATE_USER';

const LOGGED_IN = 'LOGGED_IN';
const LOGIN_ERROR = 'LOGIN_ERROR';
const CLEAR_LOGIN_ERROR = 'CLEAR_LOGIN_ERROR';

const FETCH_ME = 'FETCH_ME';
const FETCH_ME_ERROR = 'FETCH_ME_ERROR';

const LOGGING_OUT = 'LOGGING_OUT';
const LOGGED_OUT = 'LOGGED_OUT';


export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATE_USER_SUCCESS:
      return {
        ...state,
        registrateUserSuccess: action.payload.data,
        registrateUserError: null,
      };
    case REGISTRATE_USER_ERROR:
      return {
        ...state,
        registrateUserSuccess: null,
        registrateUserError: action.payload.data,
      };
    case CLEAR_REGISTRATE_USER:
      return {
        ...state,
        registrateUserSuccess: null,
        registrateUserError: null,
      };
    case LOGGED_IN:
      return {
        ...state,
        accessToken: action.payload.data.token,
        loginError: null,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        accessToken: null,
        loginError: action.payload.data,
      };
    case CLEAR_LOGIN_ERROR:
      return {
        ...state,
        loginError: null,
      };
    case FETCH_ME:
      return {
        ...state,
        me: action.payload.data,
        meError: null,
      };
    case FETCH_ME_ERROR:
      return {
        ...state,
        me: null,
        meError: action.payload.data,
      };
    case LOGGING_OUT:
      return {
        ...state,
        loggingOut: true,
      };
    case LOGGED_OUT:
      return {
        ...state,
        loggingOut: false,
        accessToken: null,
        refreshToken: null,
        me: null,
        meError: null,
      };
    default:
      return state;
  }
};


export const registrateUser = (username, email, password) => baseErrorsHandlerDecorator(
  REGISTRATE_USER_SUCCESS,
  REGISTRATE_USER_ERROR,
  () => restapi.post(
    '/signup',
    { username, email, password },
  ),
);

export const clearRegistrateUser = () => (dispatch) => {
  dispatch({
    type: CLEAR_REGISTRATE_USER,
  });
};

export const retrieveToken = (email, password)  => baseErrorsHandlerDecorator(
  LOGGED_IN,
  LOGIN_ERROR,
  () => restapi.post(
    '/login',
    {
      email,
      password,
    },
  ),
);

export const clearLoginError = () => (dispatch) => {
  dispatch({
    type: CLEAR_LOGIN_ERROR,
  });
};

export const fetchMe = () => baseErrorsHandlerDecorator(
  FETCH_ME,
  FETCH_ME_ERROR,
  () => restapi.get('/me'),
);

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGGING_OUT,
  });
};

export const logoutComplete = () => (dispatch) => {
  dispatch({
    type: LOGGED_OUT,
  });
};
