import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducer/reducer';

const store = configureStore({
  reducer,
});

export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
