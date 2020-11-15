import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import monitorReducersEnhancer from './enhancers/MonitorReducers'

import rootReducer from './rootReducer'
import rootSaga from '../sagas';

const devMode = process.env.NODE_ENV === 'development';
export default function configureStore(preloadedState) {
  const middlewares = []
  const sagaMiddleware = createSagaMiddleware()
  middlewares.push(sagaMiddleware)
  if (devMode) {
    middlewares.push(logger);
  }
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]

  const composeEnhancers = process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose

  const store = createStore(rootReducer, preloadedState, composeEnhancers(...enhancers))
  sagaMiddleware.run(rootSaga)
  
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
      const newRootReducer = require('./rootReducer').default
      store.replaceReducer(newRootReducer)
    })
  }
  return store
}