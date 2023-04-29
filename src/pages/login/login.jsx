import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginErr, setLoginErr] = useState("");
  const { loginUser, setUser } = useContext(AuthContext);

  const location = useLocation();
  const redirect = useNavigate();
  // login
  function login(e) {
    e.preventDefault();

    setLoginErr("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((userCrediential) => {
        setUser(userCrediential.user);
        form.reset();
        console.log(location);
        redirect(location?.state?.from?.pathname)
      })
      .catch((err) => {
        console.error(err);
        setLoginErr(err.message);
      });
  }

  return (
    <div style={{ backgroundColor: "#f3f3f3" }} className="min-vh-100 p-1">
      <Form
        onSubmit={login}
        style={{ maxWidth: "752px", backgroundColor: "white", padding: "5rem" }}
        className="mx-auto border my-5"
      >
        <h1 className="text-center mb-3">Login your account</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        {loginErr && <Form.Text className='text-danger'>{loginErr}</Form.Text>}
        <Button
          variant="dark"
          className="w-100 p-2 fs-4"
          type="submit"
        >
          Login
        </Button>
      <div className="mt-2 d-flex justify-content-between align-items-center">
       <p>New Here? <Link to='/register'>Create an Account</Link></p>
      </div>
      </Form>
    </div>
  );
};

export default Login;
