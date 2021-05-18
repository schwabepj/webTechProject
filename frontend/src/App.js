//IMPORTS
import React from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Home from "./Home";
import Contacts from "./Contacts";
import Nav from "./Nav";
import Manual from "./Manual";
import FullScreenDialog from "./Dialog";
import Container from "@material-ui/core/Container";
import DataTable from "./DataTable";
import Directory from "./Directory"
import Documents from "./Documents"
import Equipment from "./Equipment"

// const preventDefault = (event) => event.preventDefault();

//GLOBAL FUNCTIONS

//COMPONENTS

export default function App() {


  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Container maxWidth="lg">
          <Switch>
          <Route path="/" exact component={Home}></Route>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/directory"component={Directory}></Route>
            <Route path="/contacts" component={Contacts}></Route>
            <Route path="/documents"component={Documents}></Route>
            <Route path="/equipment"component={Equipment}></Route>
            <Route path="/manual">
              <Manual />
            </Route>
          </Switch>
        </Container>
      </Router>
    </React.Fragment>
  );
}
