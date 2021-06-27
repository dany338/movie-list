import {API_HOST_MOVIES, API_KEY, LANG} from '../config/const';
/* Defined Endpoints */
import endpoints from '../config/endpoints';

// const apiHeaders = {
//   'Content-Type': 'application/json',
//   Accept: 'application/json',
// };

const fetchParams = (method, data = '') => {
  const body = data ? { body: JSON.stringify(data) } : {};

  const newApiHeaders = new Headers();
  // newApiHeaders.append("Content-Type", "application/json");
  // newApiHeaders.append("Accept", "application/json");
  return {
    method,
    headers: newApiHeaders,
    credentials: 'same-origin',
    ...body,
  };
};

export const apiMovies = {
  getNewsMovies: async (page = 1) => {
    try {
      const response = await fetch( `${API_HOST_MOVIES}${endpoints.movies.news}?api_key=${API_KEY}&language=${LANG}&page=${page}`);
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        return response.statusText;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  getGenreMovie: async idGenres => {
    try {
      const response = await fetch( `${API_HOST_MOVIES}${endpoints.movies.genre}?api_key=${API_KEY}&language=${LANG}`);
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        return response.statusText;
      }
      const data = await response.json();
      const arrGenres = idGenres.map((item) => data.genres.filter((genre) => Number(genre.id) === Number(item))[0]?.name).filter(item => typeof item !== 'undefined');
      return arrGenres;
    } catch (error) {
      return error;
    }
  },
  getAllGenres: async () => {
    try {
      const response = await fetch( `${API_HOST_MOVIES}${endpoints.movies.genre}?api_key=${API_KEY}&language=${LANG}`);
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        return response.statusText;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  getGenreMovies: async idGenres => {
    try {
      const response = await fetch( `${API_HOST_MOVIES}${endpoints.movies.genreMovies}?api_key=${API_KEY}&with_genres=${idGenres}&language=${LANG}`);
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        return response.statusText;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  getMovieById: async idMovie => {
    try {
      const response = await fetch( `${API_HOST_MOVIES}${endpoints.movies.movieById}${idMovie}?api_key=${API_KEY}&language=${LANG}`);
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        return response.statusText;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  getVideoById: async idMovie => {
    try {
      const response = await fetch( `${API_HOST_MOVIES}${endpoints.movies.movieById}${idMovie}?api_key=${API_KEY}&language=${LANG}`);
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        return response.statusText;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  getPopularMovies: async (page = 1) => {
    try {
      const response = await fetch( `${API_HOST_MOVIES}${endpoints.movies.popular}?api_key=${API_KEY}&language=${LANG}&page=${page}`);
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        return response.statusText;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  searchMovies: async (page = 1, search) => {
    try {
      const response = await fetch( `${API_HOST_MOVIES}${endpoints.movies.search}?api_key=${API_KEY}&language=${LANG}&page=${page}&query=${search}`);
      if (!response.ok || response.status === 404 || response.status === 403 || response.status === 409 || response.status === 500 ) {
        return response.statusText;
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
};

export default apiMovies;
