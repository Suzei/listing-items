import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IError {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 1.5em;
  font-family: 'Roboto';
  color: #444444;
  max-width: 450px;
  font-weight: 500;
  font-size: 45px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Error = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  span {
    color: #c53030;
    margin-left: 5px;
  }

  svg {
    color: #c53030;
  }
`;

export const Repo = styled.div`
  display: grid;
  grid-template-columns: 170px 170px 170px;
  flex: 1;

  margin-top: 80px;
  max-width: 500px;
  gap: 20px;

  & + a {
    margin-top: 16px;
  }
`;

export const CleanButton = styled.button`
  color: white;
  background: #c92222;
  border-radius: 10px;
  padding: 10px;
  border: 0;
  font-size: 0.8rem;
  margin-top: 10px;
  align-self: flex-end;
`;

export const Form = styled.form<IError>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #fff;
    border-radius: 5px 0px 0px 5px;
    color: #3a3a3a;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 160px;
    background: #c92222;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    font-size: 1rem;
    border: 0;
    font-weight: bold;
    transition: background-color 0.1s;

    &:hover {
      background-color: ${shade(0.12, '#c92222')};
    }
  }
`;
