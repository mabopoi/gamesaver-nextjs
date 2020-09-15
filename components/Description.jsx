import React from 'react';
import { Stack, Text, Heading } from '@chakra-ui/core';

const Description = () => (
  <Stack>
    <Stack
      bg='teal.200'
      mt={4}
      marginBottom={0}
      justifyContent='space-evenly'
      isInline
    >
      <Stack textAlign='center'>
        <Heading as='i'>How does it work?</Heading>
        <Text>This is a simple app where you can save your chess games!</Text>
        <Text>It doesn't matter where you have played them</Text>
        <Text>
          You will be able to filter them in your profile by tournament, date,
          etc.
        </Text>
      </Stack>
      <Text>Photo</Text>
    </Stack>
    <Stack bg='teal.300' justifyContent='space-evenly' isInline>
      <Text>Photo</Text>
      <Stack textAlign='center'>
        <Heading as='i'>How can you use it?</Heading>
        <Text>You just have to log in with your favourite social media!</Text>
        <Text>It's that easy!</Text>
      </Stack>
    </Stack>
  </Stack>
);

export default Description;
