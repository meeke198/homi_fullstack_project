//keep track of any error messages.
//combining our reducers that handle errors.
import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import reviewErrorsReducer from "./review_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  reviews: reviewErrorsReducer
});

export default errorsReducer;

//note: combineReducers function accepts a single argument: an object whose properties will represent properties of our application state, 
//and values that correspond to domain-specific reducing functions.
