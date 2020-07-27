import React, {Component} from 'react';
import './registration.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import { Alert } from 'react-bootstrap';

import RegistrationAlert from './RegistrationAlert.js';

class Registration extends Component {

  constructor(props) {
    super(props);
    this.RegistrationAlert = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    this.registerUser(event.target.username.value, event.target.password.value)
  }

  registerUser(username, password) {
    fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    }).then(function(response) {
      if (response.status === 200) {
        console.log("User registered!");
      } else {
        console.log("User not registered");
      }
    }).catch(function(error) {
      console.log("error!");
    });
  }

  showRegistrationAlert(variant, heading, message) {
    this.registrationAlert.current.setVariant(variant);
    this.registrationAlert.current.setHeading(heading);
    this.registrationAlert.current.setMessage(message);
    this.registrationAlert.current.setVisible(true);
}

  render() {
    return (
      <>
        <div className = "Register">
          <Form onSubmit = {this.handleSubmit}>
            <Form.Group controlId = "username" size = "lg">
              <Form.Label>Username</Form.Label>
              <Form.Control autoFocus name = "username"/>
            </Form.Group>
          
            <Form.Group controlId = "password" size = "lg">
              <Form.Label>Password</Form.Label>
              <Form.Control type = "password" name = "password"/>
            </Form.Group>

            <Button block size = "lg" type = "submit">Register</Button>
          </Form>
        </div>

        <RegistrationAlert ref = { this.RegistrationAlert }/>
      </>
    )
  }
}

export default Registration;
