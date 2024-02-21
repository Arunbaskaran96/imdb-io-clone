import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const URL = "http://localhost:8000/api/signin";

export const signin = createAsyncThunk("user/signin", async (user) => {
  const data = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const res = await data.json();
  return res;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        (state.status = true), (state.user = {});
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        (state.status = false), (state.user = action.payload);
        state.error = null;
      })
      .addCase(signin.rejected, (state, action) => {
        (state.status = false), (state.user = {});
        state.error = action.payload;
      });
  },
});

export const userSelector = () => {
  return useSelector((state) => state.user);
};

export default userSlice.reducer;
