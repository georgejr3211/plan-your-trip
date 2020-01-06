import { ADD_ITEM_CARRINHO } from './actions';

const initialState = {
  data: [{ id: 1, title: 'oi' }],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_CARRINHO:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
}
