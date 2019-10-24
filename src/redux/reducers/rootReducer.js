import { combineReducers } from "redux";
import { venueReducer } from "./venueReducer";

export const rootReducer = combineReducers({
  venues: venueReducer,
});
