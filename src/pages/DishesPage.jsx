import { Container, Row, Col } from "reactstrap";
import { selectDishRecipes } from "../recipes/recipesSlice";
import { useSelector } from "react-redux";
import RecipeCard from "../recipes/RecipeCard";

const DishesPage = () => {
  const dishesRecipes = useSelector(selectDishRecipes);

  return (
    <Container>
      <h1 className="text-center">Dishes</h1>
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
