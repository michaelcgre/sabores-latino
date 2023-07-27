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
        <Col>
          <h2>{recipe.title}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipePage;
