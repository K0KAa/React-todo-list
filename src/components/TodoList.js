import React, { Component } from "react";
import Item from "./TodoItem";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <h1>hello from todo list</h1>
        <Item />
      </div>
    );
  }
}
