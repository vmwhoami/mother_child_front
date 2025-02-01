import { configureStore } from "@reduxjs/toolkit";
 
import rootReducer from "./rootReducer"; // Ensure this file exports a valid reducer
import  { thunk } from "redux-thunk";
const store = configureStore({
  reducer: rootReducer, // This must be an object or function
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  // devTools: process.env.NODE_ENV !== "production", // Enables Redux DevTools in development
});

export default store;
