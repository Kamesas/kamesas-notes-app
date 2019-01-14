import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { Container } from "semantic-ui-react";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDatails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProjects";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/project/:id" component={ProjectDatails} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/create" component={CreateProject} />
            </Switch>
          </div>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
