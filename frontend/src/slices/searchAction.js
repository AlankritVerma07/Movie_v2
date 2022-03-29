import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  text: "",
  movieItems: [],
  loading: false,
  movie: [],
};

const popularMovieSlice = createSlice({
  name: "popularMovie",
  initialState,
  reducers: {
    fetchPopularMovies: (state, action) => {
      state.movieItems = action.payload.movies;
      state.loading = false;
    },
    loading: (state) => {
      state.loading = true;
    },
  },
});

export const popularMoviesAction = popularMovieSlice.actions;
export default popularMovieSlice;
