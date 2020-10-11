import React, { useContext } from 'react';
import {
  Stack,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from '@chakra-ui/core';
import UserContext from '../context/User';
import Link from 'next/link';
import { css } from '@emotion/core';

const Actions = (props) => {
  const { onClick } = props;
  const user = useContext(UserContext);
  return (
    <>
      {Object.keys(user).length > 0 ? (
        <>
          <Stack
            isInline
            spacing={4}
            align='center'
            paddingRight={4}
            css={css`
              @media (max-width: 768px) {
                display: none;
              }
            `}
          >
            <Link href='/games'>
              <Button>Check your games!</Button>
            </Link>
            <Button onClick={onClick} variantColor='red'>
              Logout
            </Button>
          </Stack>
          <Stack
            justifyContent='center'
            paddingRight={3}
            css={css`
              display: none;
              @media (max-width: 768px) {
                display: flex;
              }
            `}
          >
            <Menu>
              <MenuButton as={Button}>
                <Icon name='drag-handle' />
              </MenuButton>
              <MenuList>
                <Link href='/games'>
                  <MenuItem>Check your games!</MenuItem>
                </Link>
                <MenuItem onClick={onClick}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </>
      ) : (
        <>
          <Stack
            isInline
            spacing={4}
            align='center'
            paddingRight={4}
            css={css`
              @media (max-width: 768px) {
                display: none;
              }
            `}
          >
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
          <Stack
            justifyContent='center'
            paddingRight={3}
            css={css`
              display: none;
              @media (max-width: 768px) {
                display: flex;
              }
            `}
          >
            <Menu>
              <MenuButton as={Button}>
                <Icon name='drag-handle' />
              </MenuButton>
              <MenuList>
                <Link href='/login'>
                  <MenuItem>Sign in</MenuItem>
                </Link>
                <Link href='/register'>
                  <MenuItem>Sign up</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Stack>
        </>
      )}
    </>
  );
};

export default Actions;
