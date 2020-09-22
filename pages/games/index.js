import React, { useState } from 'react';
import Searchbar from '../../components/Searchbar';
import { Stack, Heading } from '@chakra-ui/core';
import GameList from '../../components/GameList';

const GameSection = () => {
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <Stack minHeight='70vh'>
      <Heading marginLeft={4}>/Username/'s games</Heading>
      <Searchbar onChange={handleChange} />
      <GameList filter={filter} />
    </Stack>
  );
};

export default GameSection;
