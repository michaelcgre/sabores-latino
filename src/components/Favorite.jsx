import { useSelector } from "react-redux";
import { selectFavoriteRecipes } from "../recipes/recipesSlice";
import { Card, CardHeader, CardTitle, CardBody, CardText } from "reactstrap";
import "../styles/favorite.css";

const Favorite = () => {
  const favoriteRecipe = useSelector(selectFavoriteRecipes);

  if (!favoriteRecipe) {
    return <div>No favorite recipe found!</div>;
  }

  return (
    <div className="w-50 favorite-wrapper d-flex align-items-end">
      <Card className="w-75 mx-auto favorite-card text-center">
        <CardHeader>
          <CardTitle tag="h2">{favoriteRecipe.title}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>{favoriteRecipe.description}</CardText>
          <a href="/" className="btn">
            Make now!
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default Favorite;
