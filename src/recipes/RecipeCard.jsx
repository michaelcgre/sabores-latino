import {
  Card,
  CardImg,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock } from "@fortawesome/free-solid-svg-icons";
import "../styles/recipecard.css";
import PropTypes from "prop-types";

const RecipeCard = ({ recipe }) => {
  return (
    <Link
      to={`/recipes/${recipe.id}`}
      className="text-decoration-none recipe-link"
    >
      <Card className="recipe-card mt-5 border-round">
        <CardImg
          top
          src={recipe.img}
          alt={recipe.title}
          className="img-fluid recipe-card-img rounded-0 rounded-top"
        />
        <div>
          <CardHeader>
            <CardTitle className="fs-3 text-center" tag="h2">
              {recipe.title}
            </CardTitle>
          </CardHeader>
          <CardBody>
            <CardText className="text-center">{recipe.description}</CardText>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <span className="text-secondary">
                <FontAwesomeIcon className="clock-icon" icon={faClock} />
                {recipe.time}
              </span>
              <a href="/" className="btn">
                Make now!
                <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
              </a>
            </div>
          </CardBody>
        </div>
      </Card>
    </Link>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
