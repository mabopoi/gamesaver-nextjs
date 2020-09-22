import React from 'react';
import { InputGroup, InputLeftElement, Input, Icon } from '@chakra-ui/core';

const Searchbar = (props) => {
  const { onChange } = props;
  return (
    <InputGroup margin={4}>
      <InputLeftElement children={<Icon name='search' color='gray.300' />} />
      <Input
        type='text'
        variant='filled'
        placeholder='Write something here'
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default Searchbar;
