import React, { useState, useContext } from 'react';
import Searchbar from '../../components/Searchbar';
import { Stack, Heading } from '@chakra-ui/core';
import GameList from '../../components/GameList';
import UserContext from '../../context/User';

const GameSection = () => {
  const user = useContext(UserContext);
  const [filter, setFilter] = useState('');
  const isLogged = Object.keys(user).length > 0;

  const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Stack minHeight='70vh' textAlign='center'>
      {isLogged ? (
        <>
          <Heading marginLeft={4}>{user.name}'s games</Heading>
          <Searchbar onChange={debounce(handleChange, 1000)} />
          <GameList filter={filter} />
        </>
      ) : (
        <Heading>You are not logged!</Heading>
      )}
    </Stack>
  );
};

export default GameSection;
