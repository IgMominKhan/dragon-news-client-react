import App from "../layouts/App.jsx";
import Home from "../pages/home/home/Home.jsx";
import Category from "../pages/home/category/category.jsx";
import { createBrowserRouter } from "react-router-dom";
import NewsLayout from "../layouts/NewsLayout.jsx";
import News from "../pages/news/News.jsx";
import FormLayout from "../layouts/FormLayout.jsx";
import { Navigate } from "react-router-dom";
import Login from "../pages/login/login.jsx";
import Register from "../pages/register/Register.jsx";
import ScrollToTop from "../customhooks/ScrollToTop.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <FormLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="category/0" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "category",
    element:<> <ScrollToTop/><App /></>,
    children: [
      // {
      //   path: "/",
      //   element: <Home />,
      //   loader: () => fetch("https://dragon-news-server-omega-five.vercel.app/news"),
      // },
      {
        path: ":id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`https://dragon-news-server-omega-five.vercel.app/category/${params.id}`),
      },
    ],
  },

  {
    path: "news",
    element: <><ScrollToTop/><NewsLayout /></>,
    children: [
      {
        path: ":newsId",
        element: <PrivateRoute><News /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://dragon-news-server-omega-five.vercel.app/news/${params.newsId}`),
      },
    ],
  },
  {
  path:'terms',
  element:<h1>Terms and Conditions</h1>
  }
]);

export default Router;
