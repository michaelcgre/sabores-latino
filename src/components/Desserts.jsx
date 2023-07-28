import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { selectDessertRecipes } from "../recipes/recipesSlice";
import RecipeCard from "../recipes/RecipeCard";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";

const Desserts = () => {
  const dessertRecipes = useSelector(selectDessertRecipes);
  const firstThreeRecipes = dessertRecipes.slice(0, 3);

  if (!dessertRecipes) {
    return <div>No recipes found!</div>;
  }

  return (
    <Container>
      <Row>
        <Col>
          <Link to="/desserts" className="text-decoration-none">
            <h3 className="text-center fs-1 my-3 recipe-type-title">
              A Fusion of Cultures{" "}
              <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </h3>
          </Link>
        </Col>
      </Row>
      <Row>
        {firstThreeRecipes.map((recipe) => (
          <Col
            key={recipe.id}
            className="d-flex justify-content-around align-items-center"
          >
            <RecipeCard key={recipe.id} recipe={recipe} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Desserts;
