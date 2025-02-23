import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cakeCount: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    // Cake ordered
    ordered(state, action) {
      state.cakeCount -= action.payload;
    },

    // Cake restocked
    restocked(state, action) {
      state.cakeCount += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
