import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { BaseStatus, Container, Content, Pokemon, Stats, Type } from './styles';

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
}

export const RepositoryItem: React.FC<IPokemonInfo> = ({
  image,
  name,
  stats,
}) => {
  return (
    <Container>
      <Content href="/repositories">
        <img src={image} alt="Pokemon" />
        <div>
          <Pokemon>{name}</Pokemon>
          {stats.map(item => (
            <Stats>
              <Type key={item.base_stat}>{item.stat.name}</Type>
              <BaseStatus statusColor={item.base_stat}>
                {item.base_stat}
              </BaseStatus>
            </Stats>
          ))}
        </div>
        <FiChevronRight size={19} />
      </Content>
    </Container>
  );
};
