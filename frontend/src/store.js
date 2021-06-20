import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({}); //multiple functions are called reducers.

const initialState = {}; //initialState that manages initial state

const middleware = [thunk]; //thunk acts as a middleware between react and redux. array because multiple middlewares
//define store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
