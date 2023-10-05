import { FETCH_CARDS } from './actions';

const initialState = {
  cards: [],
};

export default function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARDS:
      return { ...state, cards: action.payload };
    default:
      return state;
  }
}
