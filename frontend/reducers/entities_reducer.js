//keep track/combine of all the relational data(reducer) in our app.
import { combineReducers } from 'redux';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer
});

export default entitiesReducer;