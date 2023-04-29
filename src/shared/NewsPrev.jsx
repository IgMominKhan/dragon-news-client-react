import Card from "react-bootstrap/Card";
import { BsBookmark } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { FaEye, FaRegStar, FaStar } from "react-icons/fa";
import moment from "moment";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const NewsPrev = ({ news }) => {
  const { _id, title, details, thumbnail_url, rating, total_view, author } = news;

  return (
    <div>
      <Card className="mb-3">
        <Card.Header className="d-flex align-items-center">
          <img
            className="rounded-circle me-2"
            style={{ height: "2.5rem" }}
            src={author?.img}
          />
          <div className="flex-grow-1">
            <p className="m-1">{author?.name}</p>
            <p className="m-0">
              {moment(author?.published_date).format("YYYY-MM-DD")}
            </p>
          </div>
          <div className="fs-3">
            <BsBookmark className="me-2" />
            <BiShareAlt />
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="fs-1">{title}</Card.Title>
          <Card.Img style={{height:'350px'}} src={thumbnail_url} />
          <Card.Text>
            {details.length > 200
              ? (
                <>
                  {details.slice(0, 200)}...<Link
                    className="d-block"
                    to={`/news/${_id}`}
                  >
                    Read More
                  </Link>
                </>
              )
              : <>{details}</>}
          </Card.Text>
          <hr className="mt-4 mb-3" />
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Rating
                className="text-danger fs-4 me-2"
                readonly
                initialRating={rating.number}
                emptySymbol={<FaRegStar />}
                fullSymbol={<FaStar />}
              />
              {rating.number}
            </div>
            <div className="fs-5">
              <FaEye className="me-2" />
              {total_view}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsPrev;
