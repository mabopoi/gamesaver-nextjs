import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import React from 'react';
import { Stack, Heading, Button } from '@chakra-ui/core';

const Login = () => {
  return (
    <Stack textAlign='center' height='70vh' align='center' justify='center'>
      <Heading>Sign in!</Heading>
      <Stack justifyContent='center' spacing={6} marginTop={4}>
        <Button variantColor='red' variant='outline' maxWidth='100px'>
          Google
        </Button>
        <Button variantColor='teal' variant='outline' maxWidth='100px'>
          Twitter
        </Button>
      </Stack>
    </Stack>
  );
};

export default Login;
