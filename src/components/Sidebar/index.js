import React from 'react'
import PropTypes from 'prop-types';
/* Components */
import SidebarRow from '../SidebarRow';
/* Style Components */
import { Container } from './styled';
/* Hooks */
import { useMovies } from '../../infraestructure/hooks';

const Sidebar = () => {
  const { data } = useMovies();

  return (
    <Container>
      <SidebarRow selected path="/" icon={'home'} title="Home" />
      <SidebarRow path="/" icon={'whatshot'} title="Treding" />
      <SidebarRow path="/" icon={'subscriptions'} title="Subscription" />
      <hr />
      {data.length > 0 && data.map((movie) => (<SidebarRow key={`movie-detail-${movie.id}`} path={`/movie/${movie.id}`} icon={'home'} title={movie.title} />))}
    </Container>
  )
}

Sidebar.propTypes = {

}

export default Sidebar;
