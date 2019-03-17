import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';

export default function configureStore() {
  return createStore(
      rootReducer,
      compose(
      applyMiddleware(thunk),
      applyMiddleware(logger),
    ),
  );
}
