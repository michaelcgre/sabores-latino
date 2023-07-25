import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { recipesReducer } from "./src/recipes/recipesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
