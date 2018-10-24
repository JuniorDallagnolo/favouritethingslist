import React, { Component, Fragment } from "react";
import {
  Col,
  Card,
  Button,
  CardTitle,
  CardText,
  Form,
  Input,
  FormGroup
} from "reactstrap";

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.item.id,
      character: this.props.item.character,
      game: this.props.item.game,
      isEdit: false
    };
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };

  handleSave = ev => {
    ev.preventDefault();
    this.props.handleToUpdate(this.state);
    this.setState({
      isEdit: false
    });
  };

  handleEdit = ev => {
    this.setState({
      isEdit: true
    });
  };

  render() {
    return (
      <Fragment>
        <Col sm="6">
          <Card body>
            {!this.state.isEdit && (
              <Fragment>
                <CardTitle>{this.state.character}</CardTitle>
                <CardText>From {this.state.game}</CardText>
                <Button
                  color="danger"
                  onClick={() => {
                    this.props.removeItem(this.state.id);
                  }}
                >
                  Remove
                </Button>
                <Button
                  color="secondary"
                  onClick={() => {
                    this.handleEdit(this.state.id);
                  }}
                >
                  Edit
                </Button>
              </Fragment>
            )}
            {this.state.isEdit && (
              <Form>
                <FormGroup>
                  <Input
                    type="text"
                    name="character"
                    id="characterName"
                    onChange={this.handleChange}
                    value={this.state.character}
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    name="game"
                    id="gameName"
                    onChange={this.handleChange}
                    value={this.state.game}
                  />
                </FormGroup>
                <Button onClick={this.handleSave} color="success">
                  Save
                </Button>
              </Form>
            )}
          </Card>
        </Col>
      </Fragment>
    );
  }
}
