import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

class Navbar extends Component {
  render() {
    return (
      <Menu stackable>
        <Link to="/" className="brand-logo">
          <Menu.Item>
            <img src="https://react.semantic-ui.com/logo.png" alt="logo" />
          </Menu.Item>
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </Menu>
    );
  }
}

export default Navbar;
