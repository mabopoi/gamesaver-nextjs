import React from 'react';
import { Stack, Text, Button } from '@chakra-ui/core';
import Link from 'next/link';

const Navbar = () => (
  <Stack isInline justifyContent='space-evenly'>
    <Text>Logo</Text>
    <Stack isInline spacing={4} align='center'>
      <Text>Oh! You are not logged!</Text>
      <Link href='/login' passHref>
        <Button>Sign up</Button>
      </Link>
    </Stack>
  </Stack>
);

export default Navbar;
