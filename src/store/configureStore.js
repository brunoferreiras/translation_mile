import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { resourceReducer } from '../reducers';
import rootSagas from '../sagas';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['resource']
};

const resourcePersistConfig = {
  key: 'resource',
  storage,
  blacklist: ['loading', 'resources']
};

const rootReducer = combineReducers({
  resource: persistReducer(resourcePersistConfig, resourceReducer)
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSagas);
  return { store, persistor };
}
