import axios from "axios";
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function SignIn() {
  const url = "http://localhost:6005/api/users/signin";
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post(url, user)
      .then((response) => {
        alert(JSON.stringify(response.data));
        // Handle response...
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <Container style={{ maxWidth: 600, marginTop: 20 }}>
      <h3>Sign In</h3>
      <Form onSubmit={handleSubmit}>
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

        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
}
