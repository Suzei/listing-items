import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const PokemonName = styled.h2`
  text-transform: capitalize;
`;

export const PokemonType = styled.p`
  background-color: blue;
`;

export const PokemonTypes = styled.div`
  strong {
    padding: 4px;
    border-radius: 5px;
    margin-left: 10px;
  }
`;

export const PokemonStatus = styled.div`
  color: blue;
  display: flex;
  text-transform: capitalize;
`;

export const PokemonStatusSec = styled.section`
  display: flex;
  flex-direction: column;
`;
