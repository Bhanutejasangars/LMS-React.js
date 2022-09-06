import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./SignUp.css";
import { useState } from "react";
import { regexEmail, regexPassword } from "../../regexValidations/validations";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/features/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const NavigateTo = useNavigate();
  const registerHandler = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      toast.error("Please Fill All The Fields");
      return;
    } else if (!regexEmail.test(email)) {
      toast.error("Email is InValid");
    } else if (!regexPassword.test(password)) {
      toast.error(
        "Password must have Minimum eight and at least one uppercase letter, one lowercase letter, one number and one special character"
      );
    } else {
      let newUser = { firstName, lastName, email, password };
      let oldUsers = JSON.parse(localStorage.getItem("usersData"));

      if (oldUsers) {
        const duplicateUser = oldUsers.filter(
          (user) => user.email === newUser.email
        );
        if (duplicateUser.length > 0) {
          toast.error("Email already exists!");
          return;
        } else {
          dispatch(registerUser([...oldUsers, newUser]));
        }
      } else {
        dispatch(registerUser([newUser]));
      }
      toast.success("Account registered successfully");
      setTimeout(() => {
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        NavigateTo("/login");
      }, 1000);
    }
  };

  return (
    <div className="signup-container">
      <Form className="form_container">
        <div className="Heading-container">
          <h2 className="heading-text">Register Here</h2>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>FirstName</Form.Label>
          <Form.Control
            type="text"
            placeholder="FirstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="text"
            placeholder="LastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Must be 8 characters"
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
            onClick={registerHandler}
          >
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
