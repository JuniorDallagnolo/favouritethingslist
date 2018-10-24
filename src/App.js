import React, { Component } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import ListContainer from "./components/ListContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: Date.now(),
          character: "Link",
          game: "Zelda",
          isEdit: false
        },
        {
          id: Date.now() + 100,
          character: "Lans",
          game: "Tactics Ogre",
          isEdit: false
        }
      ]
    };
  }

  handleToUpdate = entry => {
    if (entry.isEdit) {
      this.setState({
        list: this.state.list.map(
          el => (el.id === entry.id ? Object.assign({}, entry) : el)
        )
      });
    } else {
      let newList = this.state.list;
      newList.push(entry);
      this.setState({
        list: newList
      });
    }
  };

  removeItem = id => {
    console.log(id);
    let newList = this.state.list.filter(obj => {
      return obj.id !== id;
    });
    this.setState({
      list: newList
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <p className="lead">
          <AddForm
            buttonLabel="Add Character"
            handleToUpdate={this.handleToUpdate}
          />
        </p>
        <ListContainer
          list={this.state.list}
          removeItem={this.removeItem}
          handleToUpdate={this.handleToUpdate}
        />
      </div>
    );
  }
}

export default App;
