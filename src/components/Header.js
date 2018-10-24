import React, { Component, Fragment } from "react";
import { Jumbotron } from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron>
          <h1 className="display-3"> Favourite Video Game Character</h1>
          <p className="lead">
            This is a single-page React App that allows CRUD operations on a
            List of things.
          </p>
        </Jumbotron>
      </Fragment>
    );
  }
}
