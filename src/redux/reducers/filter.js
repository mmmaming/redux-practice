import { FILTER } from '../actionTypes';
const initialState = 'all';
export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER: {
      const { filter } = action.payload;
      return filter;
    }

    default:
      return state;
  }
}