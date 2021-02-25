import { combineReducers } from 'redux';

import {loginReducer as login} from '../bus/login/reducer';
import {profileReducer as profile} from '../bus/profile/reducer';
import {breakfastReducer as breakfast} from '../bus/breakfast/reducer';

export const rootReducer = combineReducers({
  login,
  profile,
  breakfast,
});