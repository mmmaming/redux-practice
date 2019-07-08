import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';
import list from './list';
export default combineReducers({ todos, filter, list });