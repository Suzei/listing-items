import React from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content, Pokemon, Types, Type } from './styles';

interface IPokemonInfo {
  name?: string;
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
  image?: string;

  types: [
    {
      type: {
        name: string;
      };
    },
  ];
}

export const RepositoryItem: React.FC<IPokemonInfo> = ({
  image,
  name,
  types,
}) => {
  return (
    <Link to={`/pokemons/${name}`}>
      <Container>
        <Content>
          <img src={image} alt="Pokemon" />
          <div>
            <Pokemon>{name}</Pokemon>
            <Types>
              {types.map(item => (
                <Type key={item.type.name}>{item.type.name}</Type>
              ))}
            </Types>
          </div>
        </Content>
      </Container>
    </Link>
  );
};
