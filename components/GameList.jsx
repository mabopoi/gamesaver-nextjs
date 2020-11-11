import React, { useEffect, useState } from 'react';
import { Stack, Heading } from '@chakra-ui/core';
import Game from './Game';

const GameList = (props) => {
  const { filter } = props;
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const gamesFound = await fetch('api/games/user');
      const gamesJSON = await gamesFound.json();
      setGames(gamesJSON);
    };
    fetchData();
  }, []);

  return (
    <Stack alignItems='center'>
      {games.message ? (
        <Heading>{games.message}</Heading>
      ) : (
        games
          .filter((game) => {
            const { moves, opponent, result, userColor } = game;
            const loweredMoves = moves.toLowerCase();
            const loweredOpponent = opponent.toLowerCase();
            const loweredUserColor = userColor.toLowerCase();
            const loweredFilter = filter.toLowerCase();
            return (
              loweredMoves.includes(loweredFilter) ||
              loweredOpponent.includes(loweredFilter) ||
              result.includes(loweredFilter) ||
              loweredUserColor.includes(loweredFilter)
            ); //temporary solution, add regex in the future
          })
          .map((game) => {
            return <Game key={game._id} data={game} />;
          })
      )}
    </Stack>
  );
};

export default GameList;
