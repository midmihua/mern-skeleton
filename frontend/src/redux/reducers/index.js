import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import commonReducer from './common';
import usersReducer from './users';

export default combineReducers({
  commonReducer,
  usersReducer,
  form: formReducer,
});
