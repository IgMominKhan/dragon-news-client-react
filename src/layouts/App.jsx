import LeftSide from "../shared/LeftSide";
import RightSide from "../shared/RightSide";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button'
import Header from "../shared/header/Header.jsx";
import Footer from "../shared/footer/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Marquee from "react-fast-marquee";
import HeaderNav from "../shared/navbar/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Container className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={100} gradient>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </Container>

      <HeaderNav/>
      <Container>
        <Row>
          <Col md="3">
            <LeftSide />
          </Col>

          <Col md="6">
            <Outlet />
          </Col>
          <Col md="3">
            <RightSide />
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default App;
