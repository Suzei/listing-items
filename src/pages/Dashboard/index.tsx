import React, { useState, useEffect } from 'react';
import { Title, Form, Repo, Error, CleanButton } from './styles';
import Logo from './assets/pokemon-logo.png';
import { RepositoryItem } from './components/RepositoryItem';
import { FiAlertCircle } from 'react-icons/fi';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

interface IPokemon {
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

  types: [
    {
      type: {
        name: string;
      };
    },
  ];
}

export const Dashboard: React.FC = () => {
  const [data, setData] = useState<IPokemon[]>(() => {
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
    console.log(pokemonName);
  };

  const handleClearPokemons = (): void => {
    setData([]);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    const filteredPokemonName = pokemonName?.toLocaleLowerCase();

    if (!filteredPokemonName || !pokemonName) {
      setInputError('Informe o nome do Pokemon');
      return;
    }

    const response = await api.get<IPokemon>(`${filteredPokemonName}`);
    const pokemon = response.data;

    setData([...data, pokemon]);
    setInputError('');
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
      <CleanButton onClick={handleClearPokemons}>Limpar lista</CleanButton>

      {inputError && (
        <Error>
          <FiAlertCircle />
          <span>{inputError}</span>
        </Error>
      )}

      {data.map(pokemon => (
        <RepositoryItem
          key={pokemon.name}
          image={pokemon.sprites.front_default}
          name={pokemon.name}
          stats={pokemon.stats}
          types={pokemon.types}
        />
      ))}
    </>
  );
};
