import styled, { css } from 'styled-components';

interface IColors {
  statusColor: number;
}

export const Container = styled.div`
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-20px);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  border-radius: 5px;
  border: 1px solid black;
  border-radius: 15px;
  width: 100%;
  padding: 15px 1px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }

  div {
    margin: 0 16px;
    text-align: center;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

export const Pokemon = styled.strong`
  text-transform: capitalize;
  font-size: 20px;
  color: #3d3d4d;
`;

export const Type = styled.p`
  font-size: 12px;
  color: #a8a8b3;
  margin-top: 8px;
  text-transform: uppercase;
  font-weight: 500;
`;

export const BaseStatus = styled.p<IColors>`
  color: ${props => (props.statusColor > 59 ? '#138808' : '#e21515')};
  margin-top: 5px;
  margin-left: 5px;
`;

export const Types = styled.section`
  display: flex;
  gap: 20px;
  flex-direction: row;
  flex: 1;
`;
