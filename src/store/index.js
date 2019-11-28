import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './models/rootReducer';
import rootSaga from './models/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
const sagaMidleware = createSagaMiddleware({
  sagaMonitor,
});

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
