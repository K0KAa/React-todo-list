import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "make breakfast" },
    ],
    id: uuid(),
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
