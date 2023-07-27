import { createSlice } from "@reduxjs/toolkit";
import { recipes } from "./recipes";

const initialState = {
  recipesArray: recipes,
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
});

export const recipesReducer = recipesSlice.reducer;

export const selectRecipes = (state) => state.recipes.recipesArray;

export const selectDishRecipes = (state) => {
  const dishRecipes = state.recipes.recipesArray.filter(
    (recipe) => recipe.recipeType === "dishes"
  );
  return dishRecipes;
};

export const selectDessertRecipes = (state) => {
  const dessertRecipes = state.recipes.recipesArray.filter(
    (recipe) => recipe.recipeType === "desserts"
  );
  return dessertRecipes;
};

export const selectAppetizerRecipes = (state) => {
  const appetizerRecipes = state.recipes.recipesArray.filter(
    (recipe) => recipe.recipeType === "appetizer"
  );
  return appetizerRecipes;
};

export const selectDrinkRecipes = (state) => {
  const drinkRecipes = state.recipes.recipesArray.filter(
    (recipe) => recipe.recipeType === "drinks"
  );
  return drinkRecipes;
};

export const selectTexmexRecipes = (state) => {
  const texMexRecipes = state.recipes.recipesArray.filter(
    (recipe) => recipe.recipeType === "texmex"
  );
  return texMexRecipes;
};

export const selectFavoriteRecipes = (state) => {
  const favoriteRecipes = state.recipes.recipesArray.find(
    (recipe) => recipe.isFavorite === true
  );
  return favoriteRecipes;
};

export const selectWeeklyRecipes = (state) => {
  const weeklyRecipes = state.recipes.recipesArray.filter(
    (recipe) => recipe.isWeekly === true
  );
  return weeklyRecipes;
};
