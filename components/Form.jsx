import React from 'react';
import {
  FormControl,
  Button,
  Input,
  FormLabel,
  Stack,
  Heading,
} from '@chakra-ui/core';
import Link from 'next/link';

const Form = (props) => {
  const { name, confirmPassword, onSubmit, onChange } = props;
  return (
    <>
      <form onSubmit={onSubmit}>
        <FormControl paddingBottom={4} textAlign='left'>
          {name && (
            <FormControl>
              <FormLabel paddingTop={4}> Your name </FormLabel>
              <Input onChange={onChange} name='name' />
            </FormControl>
          )}

          <FormLabel paddingTop={4}>Email</FormLabel>
          <Input onChange={onChange} name='email' />

          <FormLabel paddingTop={4}>Password</FormLabel>
          <Input type='password' onChange={onChange} name='password' />

          {confirmPassword && (
            <FormControl>
              <FormLabel paddingTop={4}> Confirm your password</FormLabel>
              <Input
                onChange={onChange}
                type='password'
                name='confirmedPassword'
              />
            </FormControl>
          )}
          <Stack padding={5}>
            <Button
              type='submit'
              backgroundColor='green.300'
              _hover={{ bg: 'green.500' }}
            >
              Done
            </Button>
          </Stack>
        </FormControl>
      </form>
      <Heading fontSize='md'>Or log in with Google</Heading>
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
      </Stack>
    </>
  );
};

export default Form;
