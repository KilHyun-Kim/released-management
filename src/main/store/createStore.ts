import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from '../../library/reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// function createStore(initialState = {}) {
//   const store = configureStore({
//     reducer: rootReducer,
//     middleware: [...getDefaultMiddleware()],
//     preloadedState: initialState,
//   });

//   return store;
// }

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware(),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
