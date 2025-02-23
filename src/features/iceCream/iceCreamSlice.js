import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  iceCreamCount: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    // Ice cream ordered
    ordered(state, action) {
      state.iceCreamCount -= action.payload;
    },

    // Ice cream restocked
    restocked(state, action) {
      state.iceCreamCount += action.payload;
    },
  },

  // Although one reducer can't modify the state of another, it can respond to any dispatched action across the app:
  // Buy a cake, get one ice cream for free:
  // extraReducers: {
  //   ["cake/ordered"](state, action) {
  //     state.iceCreamCount -= action.payload;
  //   },
  // },
  extraReducers(builder) {
    builder.addCase(cakeOrdered, (state, action) => {
      state.iceCreamCount -= action.payload;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
