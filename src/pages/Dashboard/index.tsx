import React, { useState, useEffect } from 'react';
import { Title, Form, Repo, Error } from './styles';
import Logo from './assets/pokemon-logo.png';
import { RepositoryItem } from './components/RepositoryItem';
import { FiAlertCircle } from 'react-icons/fi';
import { api } from '../../services/api';

interface IRequest {
  id?: string;
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
  name?: string;
  sprites: {
    front_default: string;
  };
}

export const Dashboard: React.FC = () => {
  const [data, setData] = useState<IRequest[]>(() => {
    const storagePokemons = localStorage.getItem('@Pokelist:pokemons'); // deixando no local storage

    if (storagePokemons) {
      return JSON.parse(storagePokemons);
    }

    return [];
  });
  const [pokemonName, setPokemonName] = useState<string>();
  const [inputError, setInputError] = useState<string>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPokemonName(e.target.value);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const filteredPokemonName = pokemonName?.toLocaleLowerCase();

    if (!filteredPokemonName) {
      setInputError('Informe o nome do Pokemon');
      return;
    }

    const response = await api.get<IRequest>(`${filteredPokemonName}`);
    const pokemon = response.data;

    if (!response.data.name?.includes(filteredPokemonName)) {
      console.log('esse pokemon já existe');
      setPokemonName('');
      return;
    }

    setData([...data, pokemon]);
    setPokemonName('');
  };

  useEffect(() => {
    // pegue todos os itens e armazene-os no localStorage
    localStorage.setItem('@Pokelist:pokemons', JSON.stringify(data));
  }, [data]);

  return (
    <>
      <img src={Logo} alt="Pokemon Logo" />
      <Title>Pokelist</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleSubmit}>
        <input placeholder="Ex: Pikachu" onChange={handleInputChange} />
        <button type="submit">Adicionar</button>
      </Form>
      {inputError && (
        <Error>
          <FiAlertCircle />
          <span>{inputError}</span>
        </Error>
      )}

      <Repo>
        {data.map(pokemon => (
          <RepositoryItem
            key={pokemon.name}
            image={pokemon.sprites.front_default}
            name={pokemon.name}
            stats={pokemon.stats}
          />
        ))}
      </Repo>
    </>
  );
};
