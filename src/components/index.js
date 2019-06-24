import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './filter';
export default class Index extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
        <Filter />
      </div>
    )
  }
}