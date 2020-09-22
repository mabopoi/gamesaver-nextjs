import { Stack } from '@chakra-ui/core';
import React from 'react';
import { Text } from '@chakra-ui/core';

const Game = (props) => {
  const { moves, opponent, result, userColor } = props.data;
  return (
    <Stack
      backgroundColor='teal.100'
      borderRadius={4}
      margin={4}
      paddingLeft={3}
    >
      <Text>Moves: {moves}</Text>
      <Text>You played against: {opponent}</Text>
      <Text>Result: {result}</Text>
      <Text>Your color: {userColor}</Text>
    </Stack>
  );
};

export default Game;
