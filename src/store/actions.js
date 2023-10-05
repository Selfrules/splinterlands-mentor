import { fetchPlayerCardDetails } from '../services/api';

export const FETCH_CARDS = 'FETCH_CARDS';

export const fetchCards = (playerName) => async (dispatch) => {
  const cards = await fetchPlayerCardDetails(playerName);
  dispatch({ type: FETCH_CARDS, payload: cards });
};