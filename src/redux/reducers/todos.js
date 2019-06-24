import { ADD_TODO, TOGGLE } from '../actionTypes';

const initialState = [{
    id:0,
    content: 'xxx',
    completed: false
}];

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            {
                const { id, content } = action.payload;
            return [...state, {id, content, completed: false}];
            }

        case TOGGLE:{
            const { id } = action.payload;
            return state.map(item => {
                if (item.id === id) {
                    return {
                        ...item, completed: !item.completed
                    }
                } else {
                    return item;
                }
            });
        }
                
        default: 
            return state;

    }
}