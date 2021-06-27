import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid lightgray;
  flex: 0.8;
  background-color: #f9f9f9;
  padding: 40px 20px;
  padding-bottom: 0;
  background-color: ${props => props.theme.backgroundBody};
  color: #fbca17;

  @media only screen and (max-width: 601px) {
    flex: 1;
  }

  h2 {
    margin-left: 5px;
    margin-bottom: 20px;
    font-size: 60px;
  }

  .recommended__movies {
    display: flex;
    flex-wrap: wrap;
  }

  .movie__loadMore {
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

  .movie__loadMore:hover {
    --text-opacity: 1;
    color: #fff;
    color: rgba(255,255,255,var(--text-opacity));
    border-color: transparent;
    --bg-opacity: 1;
    background-color: rgba(66,153,225,var(--bg-opacity));
  }

  .movie__loadMore > h4 {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export default Container;
