const initialState = [];
export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_LIST': {
      return [...state, action.payload.content]
    }

    default:
      return state;
  }
}