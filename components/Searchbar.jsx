import React, { useState } from 'react';
import {
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Stack,
  Button,
  Collapse,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
} from '@chakra-ui/core';

const Searchbar = (props) => {
  const { onChange } = props;
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Stack isInline justifyContent='center'>
      <InputGroup margin={4}>
        <InputLeftElement children={<Icon name='search' color='gray.300' />} />
        <Input
          type='text'
          variant='filled'
          placeholder='Write something here'
          onChange={onChange}
        />
      </InputGroup>
      <Button variantColor='green' onClick={handleToggle} margin={4}>
        Add a game
      </Button>
      <Collapse isOpen={show} marginLeft={4}>
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
      </Collapse>
    </Stack>
  );
};

export default Searchbar;
