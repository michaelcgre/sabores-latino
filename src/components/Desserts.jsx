import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { selectDessertRecipes } from "../recipes/recipesSlice";
import RecipeCard from "../recipes/RecipeCard";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { animated, useSpring } from "react-spring";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Desserts = () => {
  const dessertRecipes = useSelector(selectDessertRecipes);
  const firstThreeRecipes = dessertRecipes.slice(0, 3);

  const [toggle, setToggle] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fade = useSpring({
    opacity: toggle ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    if (inView) {
      setToggle(true);
    }
  }, [inView]);

  if (!dessertRecipes) {
    return <div>No recipes found!</div>;
  }

  return (
    <Container className="pb-5 mt-5">
      <Row>
        <Col>
          <Link to="/desserts" className="text-decoration-none">
            <h3 className="text-center fs-1 mt-3 fw-bold recipe-type-title">
              Still Hungry?{" "}
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
            <animated.div style={fade} ref={ref}>
              <RecipeCard key={recipe.id} recipe={recipe} />
            </animated.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Desserts;
