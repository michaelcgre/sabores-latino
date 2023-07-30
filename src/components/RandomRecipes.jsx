import { selectRecipes } from "../recipes/recipesSlice";
import RecipeCard from "../recipes/RecipeCard";
import { useSelector } from "react-redux";

const YouMightLike = ({ currentRecipeId }) => {
  const recipes = useSelector(selectRecipes);

  const randomIndexes = [];
  while (randomIndexes.length < 3) {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[randomIndex];
    if (
      !randomIndexes.includes(randomIndex) &&
      randomRecipe.id !== currentRecipeId
    ) {
      randomIndexes.push(randomIndex);
    }
  }

  return (
    <div className="mt-4 mb-5">
      <h2 className="text-center mb-4">You Might Like:</h2>
      <div className="card-container d-flex justify-content-around align-items-center flex-column flex-xl-row">
        {randomIndexes.map((index) => {
          const recipe = recipes[index];
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default YouMightLike;
