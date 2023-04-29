import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink,Link } from "react-router-dom";
import {AuthContext} from '../../providers/AuthProvider.jsx';
import { useContext } from "react";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config.jsx";


const HeaderNav = () => {
  const {user, setUser} = useContext(AuthContext);
  

  // logOut
  function logOut(){
    signOut(auth)
    .then(()=>{
        alert('sign out success');
        setUser(null)
        console.log('successfuly sign out')
      })
    .catch(err => console.error(err))
  }


  return (
    <Navbar className="my-3" variant="light">
      <Container>
        <Nav className="mx-auto gap-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="#pricing">About</NavLink>
          <NavLink to="#pricing">Career</NavLink>
        </Nav>
        <Nav>
          {user
            ? (
              <>
                <Button className="me-2">{user?.displayName}</Button>
                <Button variant="warning" onClick={logOut}>Log Out</Button>
              </>
            )
            : <Link to='/login'><Button variant='dark'>Log In</Button></Link>}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HeaderNav;
