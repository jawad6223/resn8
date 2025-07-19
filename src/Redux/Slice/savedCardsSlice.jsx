import { createSlice } from '@reduxjs/toolkit';

const savedCardsSlice = createSlice({
  name: 'savedCards',
  initialState: {
    cards: [],

  },
  reducers: {
    toggleSaved: (state, action) => {
      const card = action.payload;
      // console.log("reduxxx:",card)

      // Check if the card is already saved
      const existingCardIndex = state.cards.findIndex(savedCard => savedCard.id === card.id);

      if (existingCardIndex !== -1) {
        // If saved, remove it from the savedCards array
        state.cards.splice(existingCardIndex, 1);
      } else {
        // If not saved, add it to the savedCards array
        state.cards.push(card);
      }
    },
  },
});

export const { toggleSaved } = savedCardsSlice.actions;
export default savedCardsSlice.reducer;