import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBooks = createAsyncThunk("getBooks", async () => {
  try {
    const res = await axios.get(
      "https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1"
    );
    return res.data;
  } catch (error) {
    return error;
  }
});

const getBookSlice = createSlice({
  name: "bookshelf",
  initialState: {
    myBooks: [],
    loading: false,
    error: null,
    myFav: [],
  },
  reducers: {
    favorite: (state, action) => {
      state.myFav.push(action.payload);
      localStorage.setItem("bookData", JSON.stringify(state.myFav));
    },
  },
  extraReducers: {
    [getAllBooks.pending]: (state) => {
      state.loading = true;
    },
    [getAllBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.myBooks = action.payload;
    },
    [getAllBooks.error]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default getBookSlice.reducer;
export const { favorite } = getBookSlice.actions;
