import { ADD_TODO, FILTER, TOGGLE } from './actionTypes';

let nextTodoId = 0;

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        content,
        id: ++nextTodoId
    }
});

export const setFilter = (f) => ({
    type: FILTER,
    payload: {
        filter: f
    }
})
export const toggleTodo = (id) => ({
    type: TOGGLE,
    payload: {
        id
    }
});

export const addList = content => ({
    type: 'ADD_LIST',
    payload: {
        content
    }
});