import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './models/rootReducer';
import rootSaga from './models/rootSaga';

const sagaMidleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(sagaMidleware)
      )
    : applyMiddleware(sagaMidleware);

const store = createStore(rootReducer, enhancer);

sagaMidleware.run(rootSaga);

export default store;
