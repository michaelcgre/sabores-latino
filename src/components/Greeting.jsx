import "../styles/greeting.css";
import { Card, CardHeader, CardTitle, CardBody, CardText } from "reactstrap";

const Greeting = () => {
  return (
    <div className="greeting-wrapper">
      <Card className="greeting-card pt-3">
        <CardHeader className="card-header">
          <CardTitle tag="h1" className="card-title fs-3">
            ¡Bienvenidos a Sabores Latino!
          </CardTitle>
        </CardHeader>
        <CardBody>
          <CardText className="fs-5 card-text">
            Discover the rich and diverse culinary delights of Hispanic recipes
            that will tantalize your taste buds and transport you to the heart
            of Latin America.
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Greeting;
