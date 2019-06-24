import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';
class Todo extends Component {

  toggle = (id) => () => {
    const { toggleTodo } = this.props;
    toggleTodo(id);
  }

  render() {
    const { todo } = this.props;
    return (
      <div onClick={this.toggle(todo.id)}>
        <span>{ todo.completed ? '✔' : '✘' }</span>
        {todo.content}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id))
  }
}

export default connect(null, mapDispatchToProps)(Todo);