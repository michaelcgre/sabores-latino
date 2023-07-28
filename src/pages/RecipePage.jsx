import { useParams } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import { selectRecipes } from "../recipes/recipesSlice";
import { useSelector } from "react-redux";

const RecipePage = () => {
  const { id } = useParams();
  const recipe = useSelector((state) =>
    selectRecipes(state).find((recipe) => recipe.id === Number(id))
  );

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <Container>
      <Row>
        <Col lg={6} className="order-2 order-lg-1">
          <h1>{recipe.title}</h1>
          <p className="fs-5">{recipe.description}</p>
          <p>{recipe.time}</p>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li className="fs-5" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
        </Col>
        <Col className="order-1 order-lg-2">
          <img src={recipe.img} alt={recipe.title} className="img-fluid" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Instructions</h2>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li className="fs-5" key={index}>
                {step}
              </li>
            ))}
          </ol>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipePage;
