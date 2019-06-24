import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
class TodoList extends React.Component {
    render() {
        const { todos, filter } = this.props;

        return (
            <div>
                {
                    todos.filter(item => {
                        if (filter === 'all') {
                            return item;
                        }
                        if (filter === 'completed') {
                            return item.completed === true;
                        }
                        if (filter === 'incomplete') {
                            return item.completed === false;
                        }
                    }).map(todo => {
                        return (
                            <Todo key={todo.id} todo={todo}></Todo>
                        )
                    })
                }
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return ({
        todos: state.todos,
        filter: state.filter
    })
}

export default connect(mapStateToProps)(TodoList);
