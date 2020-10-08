import React, { useContext } from 'react';
import { Stack, Text, Button } from '@chakra-ui/core';
import Link from 'next/link';
import Logo from './Logo';
import UserContext from '../context/User';
import axios from 'axios';
import { useRouter } from 'next/router';

const Navbar = () => {
  const user = useContext(UserContext);
  const router = useRouter();
  const handleClick = async () => {
    const logout = await axios.get('/api/auth/logout');
    if (logout.status == 204) {
      router.reload();
    }
  };

  return (
    <Stack isInline justifyContent='space-evenly' alignContent='center'>
      <Logo />
      {Object.keys(user).length > 0 ? (
        <Stack isInline spacing={4} align='center' paddingRight={4}>
          <Link href='/games'>
            <Button>Check your games!</Button>
          </Link>
          <Button onClick={handleClick} variantColor='red'>
            Logout
          </Button>
        </Stack>
      ) : (
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
      )}
    </Stack>
  );
};

export default Navbar;
