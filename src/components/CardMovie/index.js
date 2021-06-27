import React, { useState, useEffect, useCallback, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import ReactStars from "react-rating-stars-component";
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import relativeTime from 'dayjs/plugin/relativeTime';
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useMovies } from '../../infraestructure/hooks';
/* Constants */
import { BASE_PATH_IMG } from '../../infraestructure/config/const';
/* Assets */
import assets from '../../assets';

dayjs.locale('es');
dayjs.extend(relativeTime);

const CardMovie = ({ id, poster_path, backdrop_path, title, release_date, vote_count, vote_average, genre_ids, onOpenModal }) => {
  console.log('poster_path', poster_path);
  const themeContext = useContext(ThemeContext);
  console.log('Current theme: ', themeContext);
  const [ processing, setProcessing ] = useState(false);
  const [ genres, setGenres ] = useState([]);
  const { getGenreMovieRequest } = useMovies();
  const media = vote_average / 2; // For this case divide by 2 for visualize de half in 5 stars
  const rateConfig = {
    size: 30,
    count: 5,
    isHalf: true,
    value: media,
    color: "lightgray",
    activeColor: "#ffd700",
    emptyIcon: <i className="material-icons">star_border</i>,
    halfIcon: <i className="material-icons">star_half</i>,
    filledIcon: <i className="material-icons">star</i>,
    onChange: newValue => {
      console.log(`Example 3: new value is ${newValue}`);
    }
  };

  const load = useCallback(async () => {
    const { msg, err } = await getGenreMovieRequest(id, genre_ids);
    if(!err) {
      setGenres(msg);
    }
  }, [genre_ids, getGenreMovieRequest, id]);

  useEffect(() => {
    if(!processing) {
      load();
      setProcessing(true);
    }
  }, [load, processing]);

  return (
    <Container theme={themeContext} to={`/movie/${id}`}>
      {!processing ? (
        <div style={{justifyContent: 'flex-end', width: '100%'}}>
          Loading information wait moment please...
          <SkeletonTheme color="#ccc" highlightColor="lightgray">
            <Skeleton width={270} height={270} />
          </SkeletonTheme>
        </div>
      ) : (
        <>
          <img
            className="movie__thumbnail"
            src={poster_path ? `${BASE_PATH_IMG}/w500${poster_path}` : (assets.logo) }
            alt="Movie Show Time Finder"
          />
          <div className="movie__info">
            <img
              className="movie__avatar"
              src={backdrop_path ? (`${BASE_PATH_IMG}/w500${backdrop_path}`) : ('https://via.placeholder.com/150.png')}
              alt="Movie Show Time Finder"
            />
            <div className="video__text">
              <h4>{title}</h4>
              <p>{genres.length > 0 && genres.join(', ')}</p>
              <div>
                <ReactStars {...rateConfig} /> • {media}
              </div>
              <p>
                {vote_count} votes • {dayjs().from(dayjs(release_date)) } • Subscribers 0
              </p>
            </div>
          </div>
          <div className="video__button">
            <div className="movie__subscriptions" onClick={(e) => onOpenModal(e, id, title, `${BASE_PATH_IMG}/w500${backdrop_path}`)}>
              <h4>Subscribe</h4>
            </div>
          </div>
        </>
      )}
    </Container>
  )
};

CardMovie.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_count: PropTypes.number.isRequired,
  vote_average: PropTypes.number.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
};

CardMovie.defaultProps = {
  backdrop_path: 'https://via.placeholder.com/150.png',
};

export default withRouter(CardMovie);
