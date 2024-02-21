import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const URL = "http://localhost:8000/api/getProducers";

export const fetchProducers = createAsyncThunk(
  "producer/fetchProducers",
  async () => {
    const data = await fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    return res;
  }
);

const producerSlice = createSlice({
  name: "producer",
  initialState: {
    status: false,
    producers: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducers.pending, (state, action) => {
        (state.status = true), (state.producers = []);
        state.error = null;
      })
      .addCase(fetchProducers.fulfilled, (state, action) => {
        (state.status = false),
          (state.producers = action.payload),
          (state.error = null);
      })
      .addCase(fetchProducers.rejected, (state, action) => {
        (state.status = false), (state.producers = []);
        state.error = action.payload.message;
      });
  },
});

export const producerSelector = () => useSelector((state) => state.producer);
export const getProducer = (state, id) => {
  return state.producer.producers.find((item) => item._id === id);
};

export default producerSlice.reducer;
