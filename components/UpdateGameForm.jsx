import React, { useState } from 'react';
import { FormLabel, Input, RadioGroup, Radio, Button } from '@chakra-ui/core';
import Axios from 'axios';
import { useRouter } from 'next/router';

const UpdateGameForm = (props) => {
  const [values, setValues] = useState(props.data);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedGame = await Axios.patch(`api/games/${values._id}`, values);
    if (updatedGame.status == 200) {
      router.reload();
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...values,
      [name]: value,
    };
    setValues(newData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormLabel>Moves</FormLabel>
      <Input
        name='moves'
        size='sm'
        value={values.moves}
        onChange={handleChange}
      />
      <FormLabel>Opponent</FormLabel>
      <Input
        name='opponent'
        size='sm'
        value={values.opponent}
        onChange={handleChange}
      />
      <FormLabel>Result</FormLabel>
      <RadioGroup
        isInline
        name='result'
        defaultValue={values.result}
        onChange={handleChange}
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
        defaultValue={values.userColor}
        onChange={handleChange}
      >
        <Radio variantColor='green' value='White'>
          White pieces
        </Radio>
        <Radio variantColor='green' value='Black'>
          Black pieces
        </Radio>
      </RadioGroup>
      <FormLabel>Date</FormLabel>
      <Input
        type='date'
        name='date'
        value={values.date}
        onChange={handleChange}
      />
      <Button
        isDisabled={values.moves && values.opponent ? false : true}
        type='submit'
      >
        Update
      </Button>
    </form>
  );
};

export default UpdateGameForm;
