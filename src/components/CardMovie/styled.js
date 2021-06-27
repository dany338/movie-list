import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 270px;
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${props => props.theme.headerBackground};
  box-shadow: 0 20px 25px -5px rgba(0,0,0,.1), 0 10px 10px -5px rgba(0,0,0,.04);
  transition: transform .2s ease-in-out,box-shadow .2s ease-in-out,-webkit-transform .2s ease-in-out;
  border-radius: 7px;

  .movie__thumbnail {
    height: 200px;
    width: 270px;
    border-radius: 7px 7px 0 0;
    background-position: 50%;
    background-size: cover;
    border-radius: 7px 7px 0 0;
  }

  .movie__info {
    display: flex;
    margin-top: 10px;
    padding-right: 30px;
  }

  .video__text {
    margin-left: 15px;
    width: 100%;
  }

  .video__button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  .movie__subscriptions {
    display: flex;
    margin-left: 15px;
    --text-opacity: 1;
    color: #2b6cb0;
    color: rgba(43,108,176,var(--text-opacity));
    cursor: pointer;
    --border-opacity: 1;
    border-color: rgba(66,153,225,var(--border-opacity));
    border-radius: .25rem;
    background-color: transparent;
    border: 0 solid #e2e8f0;
    border-width: 1px;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    justify-content: center !important;
    align-items: center !important;
    margin-left: 0px;
  }

  .movie__subscriptions:hover {
    --text-opacity: 1;
    color: #fff;
    color: rgba(255,255,255,var(--text-opacity));
    border-color: transparent;
    --bg-opacity: 1;
    background-color: rgba(66,153,225,var(--bg-opacity));
  }

  .movie__subscriptions > h4 {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .video__text > h4 {
    font-size: 14px;
    margin-bottom: 5px;
  }

  .video__text > p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    font-size: 14px;
    color: gray;
  }

  .video__text > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    font-size: 14px;
    color: gray;
  }

  .movie__avatar {
    height: 30px !important;
    width: 30px !important;
    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 50px -12px rgba(0,0,0,.25);
    cursor: pointer;
  }
`;

export default Container;
