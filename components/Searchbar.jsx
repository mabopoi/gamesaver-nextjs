import React, { useState } from 'react';
import NewGameForm from './NewGameForm';
import {
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Stack,
  Button,
  Collapse,
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
        <NewGameForm />
      </Collapse>
    </Stack>
  );
};

export default Searchbar;
