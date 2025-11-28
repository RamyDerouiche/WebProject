import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const url = "http://localhost:6005/api/users";
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userName: "",
    email: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, user)
      .then((response) => {
        console.log(response.data);
        alert(response.data.msg);
        navigate("/signIn");
      })
      .catch((error) => {
        alert(error.response.data.msg);
        console.error("There was an error!", error);
      });
  };

  return (
    <Container style={{ maxWidth: 600, marginTop: 20 }}>
      <h3>Sign Up</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="userName" className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            name="userName"
            value={user.userName}
            onChange={handleChange}
            placeholder="Enter user name"
          />
        </Form.Group>

        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="age" className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
        </Form.Group>

        <Form.Group controlId="password" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </Form.Group>

        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
}
