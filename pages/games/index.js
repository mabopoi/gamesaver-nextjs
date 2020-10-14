import React, { useState, useContext } from 'react';
import Searchbar from '../../components/Searchbar';
import { Stack, Heading } from '@chakra-ui/core';
import GameList from '../../components/GameList';
import UserContext from '../../context/User';

const GameSection = () => {
  const user = useContext(UserContext);
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <Stack minHeight='70vh' textAlign='center'>
      <Heading marginLeft={4}>{user.name}'s games</Heading>
      <Searchbar onChange={handleChange} />
      <GameList filter={filter} />
    </Stack>
  );
};

export default GameSection;
