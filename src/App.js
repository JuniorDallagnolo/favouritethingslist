import React, { Component } from "react";
import "./App.css";
import {
  Jumbotron,
  Button,
  Row,
  Col,
  Card,
  CardTitle,
  CardText
} from "reactstrap";
import ModalForm from "./ModalForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.handleToUpdate = this.handleToUpdate.bind(this);
  }

  handleToUpdate(entry) {
    entry.id = Date.now();
    let newList = this.state.list;
    newList.push(entry);
    this.setState({
      list: newList
    });
  }

  removeItem(id) {
    let newList = this.state.list.filter(obj => {
      return obj.id !== id;
    });
    this.setState({
      list: newList
    });
  }

  editItem(id) {
    console.log(id);
  }

  componentDidMount() {
    console.log(this.state.list);
  }

  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1 className="display-3"> Favourite Video Game Character</h1>
          <p className="lead">
            This is a single-page React App that allows CRUD operations on a
            List of things.
          </p>
          <hr className="my-2" />
          <p>
            Click the Button to add your favourite videogame character to the
            list
          </p>
          <p className="lead">
            <ModalForm
              buttonLabel="Add Character"
              handleToUpdate={this.handleToUpdate}
            />
          </p>
        </Jumbotron>
        <Row>
          {this.state.list.map(item => {
            return (
              <Col sm="6" key={item.id}>
                <Card body>
                  <CardTitle>{item.character}</CardTitle>
                  <CardText>From {item.game}</CardText>
                  <Button
                    color="danger"
                    onClick={() => {
                      this.removeItem(item.id);
                    }}
                  >
                    Remove
                  </Button>
                  {/* <Button
                    color="secondary"
                    onClick={() => {
                      this.editItem(item.id);
                    }}
                  >
                    Edit
                  </Button> */}
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default App;
