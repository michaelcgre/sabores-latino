import { Container, Row, Col } from "reactstrap";
import { selectTexmexRecipes } from "../recipes/recipesSlice";
import { useSelector } from "react-redux";
import RecipeCard from "../recipes/RecipeCard";

const TexmexPage = () => {
  const texmexRecipes = useSelector(selectTexmexRecipes);

  return (
    <Container className="my-5">
      <h1 className="text-center fw-bold category-title">TexMex</h1>
      <Row>
        {texmexRecipes.map((recipe) => (
          <Col
            key={recipe.id}
            className="d-flex justify-content-center align-items-center"
          >
            {<RecipeCard key={recipe.id} recipe={recipe} />}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TexmexPage;
