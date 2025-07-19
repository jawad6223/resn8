import { configureStore } from '@reduxjs/toolkit';
import savedCardsReducer from '../Slice/savedCardsSlice';

const store = configureStore({
  reducer: {
    savedCards: savedCardsReducer,
  },
});

export default store;