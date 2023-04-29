import { Col, Container, Row } from "react-bootstrap";
import Header from "../shared/header/Header.jsx";
import RightSide from "../shared/RightSide.jsx";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <Container>
      <Header />
      <h2 className="my-4">Dragon News</h2>
      <Row>
        <Col md="9">
          <Outlet />
        </Col>
        <Col md="3">
          <RightSide />
        </Col>
      </Row>
    </Container>
  );
};

export default NewsLayout;
