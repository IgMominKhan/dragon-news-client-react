import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInside from "../../shared/EditorsInside";

const News = () => {
  const [todaysPick, setTodaysPick] = useState([]);

  const news = useLoaderData();
  const { _id, title, details, image_url, category_id } = news;

  // loadtodaysPick data
  useEffect(()=>{
    fetch("https://dragon-news-server-omega-five.vercel.app/todays-pick")
    .then(res=> res.json())
    .then(fetchData => setTodaysPick(fetchData))
    .catch(err=> console.error(err))
    .finally(()=> setTodaysPick(prevState=> prevState))
  },[]) 
  

  
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Img variant="top"  src={image_url} />
          <Card.Title className="my-3 fs-1">{title}</Card.Title>
          <Card.Text className="fs-5">
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button className="btn-danger">All news in this category</Button>
          </Link>
        </Card.Body>
      </Card>

    {/* todays pick / Editors Inside */}
    <EditorsInside news={todaysPick}/>
    </div>
  );
};

export default News;
