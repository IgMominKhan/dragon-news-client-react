import { useContext, useState } from "react";
import {Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [isAccepted, setIsAccepted]= useState(false);
  const [passwordError, setPasswordError] = useState("");

  const { registerUser, setUser} = useContext(AuthContext);

  // validate and register user
  function validateAndRegisterUser(e) {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    setPasswordError("");

    if (!/.{8}/.test(password)) {
      setPasswordError("Password must be at least 8 character long");
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
    } else if (!/(?=.*[0-9])/.test(password)) {
      setPasswordError("Password must contain at least one digit");
    } else if (!/(?=.*[#?!@$%^&*-])/.test(password)) {
      setPasswordError("Password must contain at least one special character");
    }

    // register User
    registerUser(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        updateProfile(userCredential.user, { displayName: name });
        console.log(userCredential.user);
        form.reset();
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <div style={{ backgroundColor: "#f3f3f3" }} className="min-vh-100 p-1">
        <Form
          onSubmit={validateAndRegisterUser}
          style={{
            maxWidth: "752px",
            backgroundColor: "white",
            padding: "5rem",
          }}
          className="mx-auto border my-5"
        >
          <h1 className="text-center mb-3">Register your account</h1>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            {passwordError && (
              <Form.Text className="text-danger">{passwordError}</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" onChange={()=> setIsAccepted(!isAccepted)} label={<>Accept <Link to='/terms'>Term and Condition</Link></>} />
          </Form.Group>
          <Button
            disabled={!isAccepted}
            variant="dark"
            className="w-100 p-2 fs-4"
            type="submit"
          >
            Login
          </Button>
      <div className="mt-2 d-flex justify-content-between align-items-center">
       <p>Already have an account? <Link to='/login'>LogIn</Link></p>
      </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
