import { useLoaderData } from "react-router-dom"
import NewsPrev from "../../../shared/NewsPrev"

const category = () => {
  const categoryNews = useLoaderData()
  

  return (
    <div>
      {categoryNews.map((n,i)=> <NewsPrev key={i} news={n}/>)}
    </div>
  )
}

export default category
