import React from 'react';
import { Title, Form } from './styles';
import Logo from './assets/pokemon-logo.png';

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={Logo} alt="Pokemon Logo" />
      <Title>Pokelist</Title>

      <Form>
        <input placeholder="Ex: Pikachu" />
        <button type="submit">Adicionar</button>
      </Form>
    </>
  );
};
