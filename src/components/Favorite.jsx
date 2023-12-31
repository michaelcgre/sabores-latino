import { useSelector } from "react-redux";
import { selectFavoriteRecipes } from "../recipes/recipesSlice";
import { Card, CardHeader, CardTitle, CardBody, CardText } from "reactstrap";
import "../styles/favorite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Favorite = () => {
  const favoriteRecipe = useSelector(selectFavoriteRecipes);

  if (!favoriteRecipe) {
    return <div>No favorite recipe found!</div>;
  }

  return (
    <div className=" favorite-wrapper d-flex align-items-end justify-content-center">
      <Link
        to={`/recipes/${favoriteRecipe.id}`}
        className="text-decoration-none favorite-link"
      >
        <Card className="w-75 mx-auto favorite-card text-center">
          <CardHeader>
            <CardTitle tag="h2">{favoriteRecipe.title}</CardTitle>
          </CardHeader>
          <CardBody>
            <CardText>{favoriteRecipe.description}</CardText>
            <button className="btn fw-bold">
              Make now!
              <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
            </button>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default Favorite;
