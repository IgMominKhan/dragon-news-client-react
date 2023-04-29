import { useLoaderData } from "react-router-dom";
import NewsPrev from '../../../shared/NewsPrev.jsx';

const Home = () => {
  const news = useLoaderData();
  console.log(news);

  return (
    <div>
{news.map(n => <NewsPrev key={n._id} news={n}/>)}
    </div>
  )
}

export default Home
