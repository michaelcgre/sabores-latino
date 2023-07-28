import { Container, Row, Col } from "reactstrap";
import { selectDrinkRecipes } from "../recipes/recipesSlice";
import { useSelector } from "react-redux";
import RecipeCard from "../recipes/RecipeCard";

const DrinksPage = () => {
  const drinkRecipes = useSelector(selectDrinkRecipes);

  return (
    <Container>
      <h1 className="text-center">Drinks</h1>
      <Row>
        {drinkRecipes.map((recipe) => (
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

export default DrinksPage;
