import React, { useState, useContext } from 'react';
import UserContext from '../context/User';
import axios from 'axios';
import { useRouter } from 'next/router';
import {
  Stack,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Input,
} from '@chakra-ui/core';

const NewGameForm = () => {
  const user = useContext(UserContext);
  const router = useRouter();
  const [gameData, setGameData] = useState({
    user: user._id,
    result: '1-0',
    userColor: 'White',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const game = await axios.post('api/games', gameData);
    if (game.status == 201) {
      router.reload();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...gameData,
      [name]: value,
    };

    setGameData(newData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Moves</FormLabel>
        <Input name='moves' onChange={handleChange} />
        <FormLabel>Opponent</FormLabel>
        <Input name='opponent' onChange={handleChange} />
        <FormLabel>Result</FormLabel>
        <RadioGroup
          isInline
          name='result'
          onChange={handleChange}
          defaultValue='1-0'
        >
          <Radio variantColor='green' value='1-0'>
            1-0
          </Radio>
          <Radio variantColor='green' value='draw'>
            Draw
          </Radio>
          <Radio variantColor='green' value='0-1'>
            0-1
          </Radio>
        </RadioGroup>
        <FormLabel>Your color</FormLabel>
        <RadioGroup
          name='userColor'
          onChange={handleChange}
          defaultValue='White'
        >
          <Radio variantColor='green' value='White'>
            White pieces
          </Radio>
          <Radio variantColor='green' value='Black'>
            Black pieces
          </Radio>
        </RadioGroup>
      </FormControl>
      <FormLabel>Date</FormLabel>
      <Input type='date' name='date' onChange={handleChange} />
      <Stack justifyContent='right'>
        <Button
          type='submit'
          isDisabled={gameData.moves && gameData.opponent ? false : true}
        >
          Add
        </Button>
      </Stack>
    </form>
  );
};

export default NewGameForm;
