import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cardsReducer from './reducers';

const rootReducer = combineReducers({
  cards: cardsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;