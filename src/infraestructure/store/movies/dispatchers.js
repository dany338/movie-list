import {
  moviesNewsListInit,
  moviesNewsListSuccess,
  moviesNewsListError,
  moviesAllGenresInit,
  moviesAllGenresSuccess,
  moviesAllGenresError,
  moviesDiscoverGenresInit,
  moviesDiscoverGenresSuccess,
  moviesDiscoverGenresError,
  movieByIdInit,
  movieByIdSuccess,
  movieByIdError,
  moviesPopularListInit,
  moviesPopularListSuccess,
  moviesPopularListError,
  moviesSearchListInit,
  moviesSearchListSuccess,
  moviesSearchListError
} from './actions';
import * as MoviesServices from "../../services";

export const getMoviesNewsRequest = (page) => {
  return async dispatch => {
    dispatch(moviesNewsListInit());
    try {
      const data = await MoviesServices.apiMovies.getNewsMovies(page);
      if(typeof data === 'object' && Array.isArray(data.results)) {
        dispatch(moviesNewsListSuccess(data.results, data.total_pages, data.total_results, page));
      } else if(typeof data === 'string') {
        dispatch(moviesNewsListError('An error was generated please consult the administrator!'));
      }
    } catch (error) {
      console.error(error);
      dispatch(moviesNewsListError('An error was generated please consult the administrator!'));
    }
  };
};

export const getGenreMovieRequest = (id, idGenres) => {
  return async dispatch => {
    dispatch(moviesAllGenresInit());
    try {
      const data = await MoviesServices.apiMovies.getGenreMovie(idGenres);
      console.log('data', data);
      if(Array.isArray(data)) {
        dispatch(moviesAllGenresSuccess(id, data));
        return { msg: data, err: false };
      }
      dispatch(moviesAllGenresError('An error was generated please consult the administrator!'));
      return { msg: 'An error was generated please consult the administrator!', err: true };
    } catch (error) {
      console.error(error);
      dispatch(moviesAllGenresError('An error was generated please consult the administrator!'));
      return { msg: 'An error was generated please consult the administrator!', err: true };
    }
  };
};

export const getMoviesAllGenresRequest = () => {
  return async dispatch => {
    dispatch(moviesAllGenresInit());
    try {
      const data = await MoviesServices.apiMovies.getAllGenres();
      if(typeof data === 'object' && Array.isArray(data.results)) {
        dispatch(moviesAllGenresSuccess(data.results));
      } else if(typeof data === 'string') {
        dispatch(moviesAllGenresError('An error was generated please consult the administrator!'));
      }
    } catch (error) {
      console.error(error);
      dispatch(moviesAllGenresError('An error was generated please consult the administrator!'));
    }
  };
};

export const getMoviesDiscoverGenresRequest = (idGenres) => {
  return async dispatch => {
    dispatch(moviesDiscoverGenresInit());
    try {
      const data = await MoviesServices.apiMovies.getGenreMovies(idGenres);
      if(typeof data === 'object' && Array.isArray(data.results)) {
        dispatch(moviesDiscoverGenresSuccess(data.results));
      } else if(typeof data === 'string') {
        dispatch(moviesDiscoverGenresError('An error was generated please consult the administrator!'));
      }
    } catch (error) {
      console.error(error);
      dispatch(moviesDiscoverGenresError('An error was generated please consult the administrator!'));
    }
  };
};

export const getMovieByIdRequest = id => {
  return async dispatch => {
    dispatch(movieByIdInit());
    try {
      const data = await MoviesServices.apiMovies.getMovieById(id);
      if(typeof data === 'object') {
        dispatch(movieByIdSuccess(data.results));
        return { msg: data, err: false };
      }
      dispatch(movieByIdError('An error was generated please consult the administrator!'));
      return { msg: 'An error was generated please consult the administrator!', err: true };
    } catch (error) {
      console.error(error);
      dispatch(movieByIdError('An error was generated please consult the administrator!'));
      return { msg: 'An error was generated please consult the administrator!', err: true };
    }
  };
};

export const getPopularMoviesRequest = page => {
  return async dispatch => {
    dispatch(moviesPopularListInit());
    try {
      const data = await MoviesServices.apiMovies.getPopularMovies(page);
      if(typeof data === 'object' && Array.isArray(data.results)) {
        dispatch(moviesPopularListSuccess(data.results, data.total_pages, data.total_results));
      } else if(typeof data === 'string') {
        dispatch(moviesPopularListError('An error was generated please consult the administrator!'));
      }
    } catch (error) {
      console.error(error);
      dispatch(moviesPopularListError('An error was generated please consult the administrator!'));
    }
  };
};

export const getSearchMoviesRequest = (page, query) => {
  return async dispatch => {
    dispatch(moviesSearchListInit());
    try {
      const data = await MoviesServices.apiMovies.searchMovies(page, query);
      if(typeof data === 'object' && Array.isArray(data.results)) {
        dispatch(moviesSearchListSuccess(data.results, data.total_pages, data.total_results));
        return { msg: `movie found: ${data.total_results}`, err: Number(data.total_results) === 0 ? true : false, results: data.results };
      }
      dispatch(moviesSearchListError('An error was generated please consult the administrator!'));
      return { msg: 'An error was generated please consult the administrator!', err: true, results: [] };
    } catch (error) {
      console.error(error);
      dispatch(moviesSearchListError('An error was generated please consult the administrator!'));
      return { msg: 'An error was generated please consult the administrator!', err: true, results: [] };
    }
  };
};
