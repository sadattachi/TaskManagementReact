import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Form, Button, FormControl } from "react-bootstrap";

class NavComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userImage: null,
    };
  }
  logout() {
    let token = localStorage.getItem("token");
    console.log(localStorage.getItem("token"))
    console.log(token);
    console.log(localStorage.getItem("token") == null)
    console.log(token == null)
    fetch("http://127.0.0.1:3000/users/sign_out", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `${token}`
      }
    }
    ).then((res) => {
      return res.json()
    })
      .then((data) => {
        console.log(`${token}`);
        console.log(data.message);
        if (data.message === "Logged out.") {
          localStorage.removeItem("token");
          window.location.reload(false);
        }
      });;
  }
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <div className="ms-3 me-1 w-100 d-flex align-items-center">
          <Navbar.Brand href="/" className="me-auto p-2">
            Task Management App
          </Navbar.Brand>
          {localStorage.getItem("token") === null ?
            <>
              <Link className="btn btn-secondary" to="/login">Login</Link>
              <Link className="ms-1 btn btn-dark" to="/signup">Sign Up</Link>
            </> :
            <>
              <Button className="btn btn-secondary" onClick={() => this.logout()}>Log out</Button>
            </>
          }
          {/* <Button variant="outline-success" onClick={() => this.login()}>
              Login
          </Button> */}
        </div>
      </Navbar>
    );
  }
}

export default NavComp;