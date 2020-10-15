import React from 'react';
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
  return (
    <form>
      <FormControl>
        <FormLabel>Moves</FormLabel>
        <Input />
        <FormLabel>Opponent</FormLabel>
        <Input />
        <FormLabel>Result</FormLabel>
        <Input />
        <FormLabel>Your color</FormLabel>
        <RadioGroup>
          <Radio variantColor='green' value='White'>
            White pieces
          </Radio>
          <Radio variantColor='green' value='Black'>
            Black pieces
          </Radio>
        </RadioGroup>
        <FormLabel>Date</FormLabel>
        <Input type='date' />
      </FormControl>
      <Stack justifyContent='right'>
        <Button>Add</Button>
      </Stack>
    </form>
  );
};

export default NewGameForm;
