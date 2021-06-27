import React, { useState, useEffect, useCallback, useRef }  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
/* Components */
import CardMovieDetail from '../../components/CardMovieDetail';
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useMovies } from '../../infraestructure/hooks';
/* Constants */
import { BASE_PATH_IMG } from '../../infraestructure/config/const';

const MovieDetail = ({ match }) => {
  const [ processing, setProcessing ] = useState(false);
  const [ movie, setMovie ] = useState(null);
  const { getMovieByIdRequest } = useMovies();
  const [state, setState] = useState(false);
  const setterRef = useRef(setState);
  const setterIfMounted = useCallback((...args) => setterRef.current(...args), [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const load = async () => {
    setProcessing(false);
    const { msg, err } = await getMovieByIdRequest(match.params.id);
    if(!err) {
      console.log('Entro', msg);
      setMovie(msg);
    }
    setProcessing(true);
  };

  useEffect(() => {
    console.log('match.params.id', match.params.id);
    load();
    return () => {
      setterRef.current = () => undefined
    }
  }, [state, setterIfMounted, match.params.id]);

  return (
    <Container>
      <div className="movie__filter">
        <i className="material-icons">movie</i>
        <h2>MOVIE # <small>{match.params.id}</small></h2>
      </div>
      {!processing ? (
        <div style={{justifyContent: 'flex-end', width: '100%'}}>
          Loading information wait moment please...
          <SkeletonTheme color="#ccc" highlightColor="lightgray">
            <Skeleton width={600} height={500} />
          </SkeletonTheme>
        </div>
      ) : (
        <>
          <hr />
          {movie && (
            <div className="movie__row">
              <img
                className="movieDetail__logo"
                src={movie.poster_path ? (`${BASE_PATH_IMG}/w500${movie.poster_path}`) : ('https://via.placeholder.com/150.png')}
                alt={movie.original_title}
              />
              <div className="movieDetail__text">
                <h4>{movie.original_language} {movie.adult && (<i className="material-icons" title="Adults">accessibility_new</i>)}</h4>
              </div>
            </div>
          )}
          <hr />
          {movie && (<CardMovieDetail {...movie} />)}
        </>
      )}
    </Container>
  )
}

MovieDetail.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

MovieDetail.defaultProps = {
  match: {},
};


export default withRouter(MovieDetail);
