import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class SignedInLinks extends Component {
  render() {
    return (
      <Fragment>
        <Menu.Item>
          <NavLink to="/create">New Project</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/">Log Out</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/">NN</NavLink>s
        </Menu.Item>
      </Fragment>
    );
  }
}

export default SignedInLinks;
