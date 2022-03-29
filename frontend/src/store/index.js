import { configureStore } from "@reduxjs/toolkit";
import popularMovieSlice from "../slices/searchAction";

const store = configureStore({
  reducer: { popularMovie: popularMovieSlice.reducer },
});

export default store;
