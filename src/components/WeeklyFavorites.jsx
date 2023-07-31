import { useSelector } from "react-redux";
import {
  Card,
  CardImg,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
} from "reactstrap";
import { selectWeeklyRecipes } from "../recipes/recipesSlice";
import "../styles/weeklyfavorites.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";

const WeeklyFavorites = () => {
  const weeklyFavorites = useSelector(selectWeeklyRecipes);

  if (!weeklyFavorites) {
    return <div>No recipes found!</div>;
  }

  return (
    <div className="favorites-wrapper">
      <h2 className="text-center fs-1 my-3 favorites-title">
        Our Weekly Favorites
      </h2>
      {weeklyFavorites.map((recipe) => (
        <Link
          key={recipe.id}
          to={`/recipes/${recipe.id}`}
          className="text-decoration-none favorites-link"
        >
          <Card className="d-flex flex-row justify-content-center align-items-center favorites-card">
            <CardImg
              top
              src={recipe.imgSmall}
              alt={recipe.title}
              className="recipe-img img-fluid rounded-0"
            />
            <div>
              <CardHeader>
                <CardTitle className="fs-3" tag="h2">
                  {recipe.title}
                </CardTitle>
              </CardHeader>
              <CardBody>
                <CardText>{recipe.description}</CardText>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-secondary">
                    <FontAwesomeIcon className="clock-icon" icon={faClock} />
                    {recipe.time}
                  </span>
                  <button className="btn fw-bold">
                    Make now!
                    <FontAwesomeIcon
                      className="arrow-icon"
                      icon={faArrowRight}
                    />
                  </button>
                </div>
              </CardBody>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default WeeklyFavorites;
