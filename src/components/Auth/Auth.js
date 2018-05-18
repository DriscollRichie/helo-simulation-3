import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/reducer";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: ""
    };
  }

  handleInputChange(key, value) {
    this.setState({ [key]: value });
  }

  registerUser() {
    let { usernameInput, passwordInput } = this.state;
    axios
      .post("/api/auth/register", { usernameInput, passwordInput })
      .then(res => {
        console.log("User has been registered", res.data);
        this.props.updateUser(
          res.data[0].id,
          res.data[0].username,
          res.data[0].profile_pic
        );
      });
  }

  loginUser() {
    let { usernameInput, passwordInput } = this.state;
    axios
      .post("/api/auth/login", { usernameInput, passwordInput })
      .then(res => {
        console.log("User has been Logged In", res.data);
        this.props.updateUser(
          res.data[0].id,
          res.data[0].username,
          res.data[0].profile_pic
        );
      });
  }

  render() {
    return (
      <div>
        <input
          placeholder="Username"
          onChange={e =>
            this.handleInputChange("usernameInput", e.target.value)
          }
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e =>
            this.handleInputChange("passwordInput", e.target.value)
          }
        />
        <Link to="/dashboard">
          <button onClick={() => this.loginUser()}>Login</button>
        </Link>
        <Link to="/dashboard">
          <button onClick={() => this.registerUser()}>Register</button>
        </Link>
      </div>
    );
  }
}

export default connect(null, { updateUser })(Auth);
