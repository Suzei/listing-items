import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  Container,
  PokemonName,
  PokemonStatus,
  PokemonStatusSec,
  PokemonTypes,
} from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { api } from '../../services/api';

interface IPokemonInfo {
  pokemon: string;
}

interface IPokemonData {
  types: [
    {
      type: {
        name: string;
      };
    },
  ];

  forms: [
    {
      name: string;
    },
  ];

  stats: [
    {
      base_stat: string;
      stat: {
        name: string;
      };
    },
  ];
}

export const Repo: React.FC = () => {
  const { params } = useRouteMatch<IPokemonInfo>();
  const [data, setData] = useState<IPokemonData>();

  useEffect(() => {
    api.get(`${params.pokemon}`).then(response => setData(response.data));
  }, []);

  console.log('data', data?.types[0].type);

  return (
    <Container>
      <img alt={`Sprite do ${params.pokemon}`} />
      <div>
        <PokemonTypes>
          <PokemonName>{params.pokemon}</PokemonName>
          {data?.types.map(item => (
            <strong>{item.type.name}</strong>
          ))}
        </PokemonTypes>

        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>
      </div>
      <h3>Status:</h3>
      <PokemonStatusSec>
        {data?.stats.map(item => (
          <PokemonStatus>
            <h2>{item.stat.name}</h2>
            <h3>{item.base_stat}</h3>
          </PokemonStatus>
        ))}
      </PokemonStatusSec>
    </Container>
  );
};
