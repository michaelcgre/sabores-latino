import { Container, Row, Col } from "reactstrap";
import { selectDishRecipes } from "../recipes/recipesSlice";
import { useSelector } from "react-redux";
import RecipeCard from "../recipes/RecipeCard";

const DishesPage = () => {
  const dishesRecipes = useSelector(selectDishRecipes);

  return (
    <Container className="my-5">
      <h1 className="text-center fw-bold category-title">Dishes</h1>
      <Row>
        {dishesRecipes.map((recipe) => (
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

export default DishesPage;
