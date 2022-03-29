import { popularMoviesAction } from "../slices/searchAction";
import tmbdApi from "../api/tmbdApi";

export const fetchPopularMovies = (category, params) => {
  return async (dispatch) => {
    const response = await tmbdApi.getMoviesList(category, { params });
    dispatch(
      popularMoviesAction.fetchPopularMovies({
        movies: response.data.results.slice(1, 7),
      })
    );
  };
};
