/* eslint-disable react/jsx-no-target-blank */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { ThemeContext } from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import relativeTime from 'dayjs/plugin/relativeTime';
/* Style Components */
import { Container } from './styled';
/* Constants */
import { BASE_PATH_IMG } from '../../infraestructure/config/const';
/* Assets */
import assets from '../../assets';

dayjs.locale('es');
dayjs.extend(relativeTime);

const CardMovieDetail = ({ id, adult, overview, homepage, title, release_date, vote_count, vote_average, genres, poster_path, backdrop_path }) => {
  const themeContext = useContext(ThemeContext);
  window.scrollTo(0, 0);
  const media = vote_average / 2;
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
  return (
    <Container theme={themeContext}>
      <img
        src={backdrop_path ? (`${BASE_PATH_IMG}/w500${backdrop_path}`) : (assets.logo)}
        alt={title}
      />
      <div className="movie__text">
        <h3><a href={homepage} target="_blank">{title}</a></h3>
        <p className="movie__headline">{genres.length > 0 && genres.map((genre) => genre.name).join(', ')}</p>
        <div className="movie__headline">
          <ReactStars {...rateConfig} /> • {media}
        </div>
        <p className="movie__headline">
          {vote_count}{' '}
          <span className="movie__subs">
            <span className="movie__subsVotes">votes</span>
          </span>{' '} • Release date: {release_date} • {dayjs().from(dayjs(release_date)) }{' '}
          <span className="movie__subs">
            <span className="movie__subsVotes">Subscribers</span>
          </span>
        </p>
        <p className="movie__overview">{overview}</p>
      </div>
    </Container>
  )
};

CardMovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  adult: PropTypes.bool.isRequired,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  homepage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_count: PropTypes.number.isRequired,
  vote_average: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    })
  ).isRequired,
};

export default withRouter(CardMovieDetail);
