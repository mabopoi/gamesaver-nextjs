import React from 'react';
import { Stack, Heading, Button } from '@chakra-ui/core';
import Link from 'next/link';
const Login = () => {
  return (
    <Stack textAlign='center' height='70vh' align='center' justify='center'>
      <Heading>Sign in!</Heading>
      <Stack justifyContent='center' spacing={6} marginTop={4}>
        <Link href='/api/auth/google'>
          <Button
            variantColor='red'
            variant='outline'
            maxWidth='100px'
            marginBottom={6}
          >
            Google
          </Button>
        </Link>
        <Button variantColor='teal' variant='outline' maxWidth='100px'>
          Twitter
        </Button>
      </Stack>
    </Stack>
  );
};

export default Login;
