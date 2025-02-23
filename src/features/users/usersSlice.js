import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  errorMsg: "",
  users: [],
};

/*
  createAsyncThunk:
  A function that accepts a Redux action type string and a callback function (the async function in this case) that should return a promise. It generates promise lifecycle action types based on the action type prefix that you pass in ("users/fetchUsers" in this case), and returns a thunk action creator (fetchUsers in this case) that will run the promise callback and dispatch the lifecycle actions based on the returned promise (e.g., "users/fetchUsers/pending", "users/fetchUsers/fulfilled", etc. in this case!)

  It does not generate any reducer functions, since it does not know what data you're fetching, how you want to track loading state, or how the data you return needs to be processed. You should write your own reducer logic that handles these actions, with whatever loading state and processing logic is appropriate for your own app.
*/

const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,

  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.errorMsg = "";
    });

    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.users = [];
      state.errorMsg = action.error.message;
    });
  },
});

export default usersSlice.reducer;
export { fetchUsers };
