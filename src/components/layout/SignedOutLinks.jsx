import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class SignedInLinks extends Component {
  render() {
    return (
      <Fragment>
        <Menu.Item>
          <NavLink to="/signup">Signup</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/signin">Login</NavLink>
        </Menu.Item>
      </Fragment>
    );
  }
}

export default SignedInLinks;
