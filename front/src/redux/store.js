import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import creareSagaMiddleware from 'redux-saga';

import rootSaga from './sagas/rootSaga';
import authReducer from './reducers/authReducer';

const sagaMiddleware = creareSagaMiddleware();
const preloadedState = window.localStorage.getItem('redux') ?? '{}';

const store = createStore(
  combineReducers({
    auth: authReducer,
  }),
  JSON.parse(preloadedState),
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  window.localStorage.setItem('redux', JSON.stringify(store.getState()));
})

export default store;
