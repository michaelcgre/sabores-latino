import { Container, Row, Col } from "reactstrap";
import { selectAppetizerRecipes } from "../recipes/recipesSlice";
import { useSelector } from "react-redux";
import RecipeCard from "../recipes/RecipeCard";

const AppetizersPage = () => {
  const appetizerRecipes = useSelector(selectAppetizerRecipes);

  return (
    <Container>
      <h1 className="text-center">Appetizers</h1>
      <Row>
        {appetizerRecipes.map((recipe) => (
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

export default AppetizersPage;
