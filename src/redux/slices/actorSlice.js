import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const URL = "http://localhost:8000/api/getactors";

export const fetchActors = createAsyncThunk("actor/fetchActors", async () => {
  const data = await fetch(URL, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const res = await data.json();
  return res;
});

const actorSlice = createSlice({
  name: "actor",
  initialState: {
    actors: [],
    status: false,
    error: null,
  },
  reducers: {
    editActor: (state, action) => {
      const actors = state.actors.filter(
        (item) => item._id != action.payload._id
      );
      state.actors = [...actors, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchActors.pending, (state, action) => {
      (state.status = true), (state.actors = []), (state.error = null);
    });
    builder.addCase(fetchActors.fulfilled, (state, action) => {
      state.status = false;
      state.actors = action.payload;
      state.error = null;
    });
    builder.addCase(fetchActors.rejected, (state, action) => {
      (state.status = false), (state.actors = []);
      state.error = action.payload.message;
    });
  },
});

export const getActor = (state, id) => {
  console.log(state.actor.actors);
  const actor = state.actor.actors.find((item) => item._id === id);
  return actor;
};
export const actorSelector = () => useSelector((state) => state.actor);

export const { editActor } = actorSlice.actions;
export default actorSlice.reducer;
