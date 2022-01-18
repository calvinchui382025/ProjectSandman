import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas';
import reducers from './reducers';
//======================================================
export type IState = ReturnType<typeof reducers>;
//======================================================
export const store = configureStore({
  reducer: reducers,
});
//======================================================
(window as any).store = store;