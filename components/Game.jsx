import React from 'react';
import { Stack, Text } from '@chakra-ui/core';

const Game = (props) => {
  const { moves, opponent, result, userColor, _id } = props.data;
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
