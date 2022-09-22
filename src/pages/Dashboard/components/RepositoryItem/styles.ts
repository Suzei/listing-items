import styled, { css } from 'styled-components';

interface IColors {
  statusColor: number;
}

export const Container = styled.div``;

export const Content = styled.a`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #444444;
  padding: 24px;
  transition: transform 0.2s;

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }

  &:hover {
    transform: translateX(20px);
  }

  div {
    margin: 0 16px;
    flex: 1;
  }

  img {
    width: 80px;
    height: 80px;
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
  color: ${props => (props.statusColor > 59 ? 'green' : 'red')};
  margin-top: 5px;
  margin-left: 5px;
`;

export const Stats = styled.span`
  display: flex;
  align-items: center;
`;
