import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;

  .modal__title > h4 {
    font-size: 14px;
    margin-bottom: 10px;
  }

  .modal__content {
    display: flex;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    flex-direction: column;
    width: 100%;
  }

  .modal__row {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 100%;
  }

  .modal__row > input {
    display: flex;
    color: #484848;
    border: 1px solid lightgray;
    padding: 6px;
    font-size: 14px;
    border-radius: 4px;
    font-weight: 400;
  }

  .modal__row > input:focus {
    outline: none;
  }

  .modal__action {
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

  .modal__action:hover {
    --text-opacity: 1;
    color: #fff;
    color: rgba(255,255,255,var(--text-opacity));
    border-color: transparent;
    --bg-opacity: 1;
    background-color: rgba(66,153,225,var(--bg-opacity));
  }
`;

export default Container;
