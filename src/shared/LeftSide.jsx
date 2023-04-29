import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const LeftSide = () => {

const [categories, setCategories] = useState([])

  useEffect(()=>{
    fetch('https://dragon-news-server-omega-five.vercel.app/categories')
      .then(res=>res.json())
      .then(fetchData => {
        setCategories(fetchData);
      })
      .catch(err=> console.error(err))
  },[])





  return (
    <div>
    <h2>All Categories</h2>
      <ul className='list-unstyled text-lg ps-4'>
        {categories.map(category=> <li key={category.id} className=' p-2'><Link className='text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link></li>)}
      </ul>
    </div>
  )
}

export default LeftSide
