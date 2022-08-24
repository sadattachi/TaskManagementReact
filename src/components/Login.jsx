import React, { Component } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  login() {
    const { navigate } = this.props;
    console.log(this.state.email)
    console.log(this.state.password)
    fetch("http://127.0.0.1:3000/users/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        "user": {
          "email": this.state.email,
          "password": this.state.password
        }
      })
    })
      .then((res) => {
        let token = res.headers.get('Authorization')
        localStorage.setItem("token", token);
        return res.json()
      })
      .then((data) => {
        let token = localStorage.getItem("token");
        console.log(token);
        if (token != null) {
          navigate("/");
          window.location.reload(false);
        }
      });
  }
  render() {
    return (
      <Form className="p-2 w-25" >
        <FormControl id="email" type="email" name="email" placeholder="Email" value={this.state.email} className="mb-2" onChange={this.handleInputChange} />
        <FormControl id="password" type="password" name="password" placeholder="Password" value={this.state.password} className="mb-2" onChange={this.handleInputChange} />
        <Button variant="outline-success" onClick={() => this.login()}>
          Log in
        </Button>
      </Form>
      //   <Button variant="outline-success" onClick={() => this.login()}>
      //       Login
      //     </Button>
    );
  }
}

// export default LoginPage;

export default function (props) {
  const navigate = useNavigate();

  return <LoginPage navigate={navigate} />
}