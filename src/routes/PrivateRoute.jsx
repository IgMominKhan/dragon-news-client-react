import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
  const location = useLocation();
  const {user, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  } else if(user){
    return children
  }else {
    return <Navigate to='/login' state={{from: location}} replace />
  }
};

export default PrivateRoute;
