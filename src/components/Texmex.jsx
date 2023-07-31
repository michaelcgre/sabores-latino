import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { selectTexmexRecipes } from "../recipes/recipesSlice";
import RecipeCard from "../recipes/RecipeCard";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { animated, useSpring } from "react-spring";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Texmex = () => {
  const texmexRecipes = useSelector(selectTexmexRecipes);
  const firstThreeRecipes = texmexRecipes.slice(0, 3);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setToggle(true);
      }, 100);
    }
  }, [inView]);

  const [toggle, setToggle] = useState(false);

  const fade = useSpring({
    opacity: toggle ? 1 : 0,
    config: { duration: 1500 },
  });

  if (!texmexRecipes) {
    return <div>No recipes found!</div>;
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Link to="/texmex" className="text-decoration-none">
            <h3 className="text-center fs-1 mt-3 fw-bold recipe-type-title">
              A Fusion of Cultures{" "}
              <FontAwesomeIcon className="icon" icon={faArrowRight} />
            </h3>
          </Link>
        </Col>
      </Row>
      <Row>
        {firstThreeRecipes.map((recipe, index) => (
          <Col
            key={recipe.id}
            className="d-flex justify-content-around align-items-center"
          >
            <animated.div style={fade} ref={index === 0 ? ref : undefined}>
              <RecipeCard key={recipe.id} recipe={recipe} />
            </animated.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Texmex;
