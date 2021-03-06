import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, addList } from '../redux/actions';

class AddTodo extends Component {

    state = {
        value: ''
    }
    add = () => {
        const { addTodo, addList } = this.props;
        const { value } = this.state;
        addTodo(value);
        addList(value);
        this.setState({ value: '' })
    }

    change = (evt) => {
        const { value } = evt.target;
        this.setState({ value });
    }

    render() {
        const { value } = this.state;
        return (
            <div>
                <input type="text" value={value} onChange={this.change}/>
                <button onClick={this.add}>添加</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (x) => dispatch(addTodo(x)),
        addList: (x) => dispatch(addList(x))
    };
}

export default connect(null, mapDispatchToProps)(AddTodo);

