import { useParams } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import { selectRecipes } from "../recipes/recipesSlice";
import { useSelector } from "react-redux";
import "../styles/RecipePage.css";
import { DiscussionEmbed } from "disqus-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import RandomRecipes from "../components/RandomRecipes";

const RecipePage = () => {
  const { id } = useParams();
  const recipe = useSelector((state) =>
    selectRecipes(state).find((recipe) => recipe.id === Number(id))
  );

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col lg={6} className="order-2 order-lg-1">
          <h1 className="fs-1 recipe-page-titles mt-4">{recipe.title}</h1>
          <p className="fs-5">{recipe.description}</p>
          <p>
            <FontAwesomeIcon className="clock-icon" icon={faClock} />
            {recipe.time}
          </p>
          <h2 className="fs-2 recipe-page-titles mt-4">Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li className="fs-5 my-1" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
        </Col>
        <Col className="order-1 order-lg-2 d-flex justify-content-center align-items-center">
          <img
            src={recipe.img}
            alt={recipe.title}
            className="img-fluid rounded recipe-image"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="fs-2 recipe-page-titles mt-4">Instructions</h2>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li className="fs-5 my-1" key={index}>
                {step}
              </li>
            ))}
          </ol>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <DiscussionEmbed
            shortname="sabores-latino"
            config={{
              url: window.location.href,
              identifier: String(recipe.id),
              title: recipe.title,
              language: "zh_EN",
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <RandomRecipes currentRecipeId={recipe.id} />
        </Col>
      </Row>
    </Container>
  );
};

export default RecipePage;
