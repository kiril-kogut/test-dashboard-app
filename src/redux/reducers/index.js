import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import profile from './profile';

const combined = combineReducers({
  auth,
  profile,
  form: formReducer,
});

export default combined;
