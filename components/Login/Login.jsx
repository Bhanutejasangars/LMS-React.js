import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../SignUp/SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { regexEmail, regexPassword } from "../../regexValidations/validations";
import { useDispatch } from "react-redux";
import { loggedUser } from "../../redux/features/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const NavigateTo = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please enter your email and password");
    } else if (!regexEmail.test(email)) {
      toast.error("Invalid Email");
    } else if (!regexPassword.test(password)) {
      toast.error("Invalid Password");
    } else {
      let oldUsers = JSON.parse(localStorage.getItem("usersData"));
      const verifiedUser = oldUsers.filter((user) => user.email === email);
      if (verifiedUser.length > 0) {
        if (verifiedUser[0].password === password) {
          dispatch(loggedUser(`${verifiedUser[0].firstName}`));
          toast.success("Account Logging");
          setTimeout(() => {
            NavigateTo("/");
            setEmail("");
            setPassword("");
          }, 1000);
        } else {
          toast.error("Password does not match with your Account");
        }
      } else {
        toast.error("Account does not exist");
      }
    }
  };
  return (
    <>
      <div className="signup-container">
        <Form className="form_container">
          <div className="Heading-container">
            <h2 className="heading-text">Login Here</h2>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your Email Id"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Form.Text className="text-muted" style={{ color: "black" }}>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <div className="button-container">
            <Button
              className="px-2 py-1"
              variant="primary"
              onClick={loginHandler}
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
