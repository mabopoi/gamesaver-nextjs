import React from 'react';
import { Stack} from '@chakra-ui/core';
import Logo from './Logo';
import axios from 'axios';
import { useRouter } from 'next/router'
import Actions from './Actions'
const Navbar = () => {
  
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
      <Actions onClick={handleClick}/>
    </Stack>
  );
};

export default Navbar;
