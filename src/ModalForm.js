import React, { Component, Fragment } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, character: "", game: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.handleToUpdate(this.state);
    this.setState({ character: "", game: "" });
    this.toggle();
  }

  handleChange(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  render() {
    return (
      <Fragment>
        <Button color="primary" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Character</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="characterName">Character</Label>
                <Input
                  type="text"
                  name="character"
                  id="characterName"
                  placeholder="Favourite Character?"
                  onChange={this.handleChange}
                  value={this.state.character}
                />
              </FormGroup>
              <FormGroup>
                <Label for="gameName">Game</Label>
                <Input
                  type="text"
                  name="game"
                  id="gameName"
                  placeholder="From which game?"
                  onChange={this.handleChange}
                  value={this.state.game}
                />
              </FormGroup>
              <ModalFooter>
                <Button color="success">Add to List</Button>
              </ModalFooter>
            </Form>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}
