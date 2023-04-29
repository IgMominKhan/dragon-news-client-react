import { Link } from "react-router-dom";
import { Row, Card, Col } from "react-bootstrap";

const EditorsInside = ({ news }) => {
  return (
    <div className="my-5">
      <h2 className="mb-4 ">Editors Inside</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {news.map((n, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img style={{height:'150px'}} variant="top" src={n.thumbnail_url} />
              <Card.Body>
                <Card.Title className="fs-3">{n.title}</Card.Title>
                <Card.Text>
                  {n.details.length > 150
                    ? <>{n.details.slice(0, 150)}...<Link to={`/news/${n._id}`}>Read More</Link></>
                    : <>{n.details}</>}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EditorsInside;
