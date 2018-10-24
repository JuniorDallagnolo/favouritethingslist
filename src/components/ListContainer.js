import React, { Component } from "react";
import Item from "./Item";
import { Row, Container } from "reactstrap";

export default class ListContainer extends Component {
  render() {
    return (
      <Container className="pr-0">
        <h5 className="text-center">
          <u>List of Characters</u>
        </h5>
        <Row>
          {this.props.list.map(item => {
            return (
              <Item
                key={item.id}
                item={item}
                removeItem={this.props.removeItem}
                handleToUpdate={this.props.handleToUpdate}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}
