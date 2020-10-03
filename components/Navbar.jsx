import React from 'react';
import { Stack, Text, Button } from '@chakra-ui/core';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => (
  <Stack isInline justifyContent='space-evenly' alignContent='center'>
    <Logo />
    <Stack isInline spacing={4} align='center' paddingRight={4}>
      <Text>Oh! You are not logged!</Text>
      <Link href='/login' passHref>
        <Stack paddingRight={2}>
          <Button variantColor='cyan' variant='ghost'>
            Sign in
          </Button>
        </Stack>
      </Link>
      <Link href='/register' passHref>
        <Button>Sign up</Button>
      </Link>
    </Stack>
  </Stack>
);

export default Navbar;
