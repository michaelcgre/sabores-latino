import Greeting from "../components/greeting";
import Favorite from "../components/Favorite";
import WeeklyFavorites from "../components/WeeklyFavorites";
import { Container, Row, Col } from "reactstrap";
import "../styles/homepage.css";
import Texmex from "../components/Texmex";
import Drinks from "../components/Drinks";
import Desserts from "../components/Desserts";

const HomePage = () => {
  return (
    <div className="home-wrapper">
      <Greeting />
      <div className="favorite-favorites-wrapper">
        <Container>
          <Row>
            <Col lg={6}>
              <Favorite />
            </Col>
            <Col>
              <WeeklyFavorites />
            </Col>
          </Row>
        </Container>
        <Texmex />
        <Drinks />
        <Desserts />
      </div>
    </div>
  );
};

export default HomePage;
