import { Container, Row, Col } from "reactstrap";
import { selectDessertRecipes } from "../recipes/recipesSlice";
import { useSelector } from "react-redux";
import RecipeCard from "../recipes/RecipeCard";

const DessertPage = () => {
  const dessertRecipes = useSelector(selectDessertRecipes);

  return (
    <Container className="my-5">
      <h1 className="text-center fw-bold category-title">Desserts</h1>
      <Row>
        {dessertRecipes.map((recipe) => (
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

export default DessertPage;
