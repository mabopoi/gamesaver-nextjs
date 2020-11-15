import React from 'react';
import {
  FormControl,
  Button,
  Input,
  FormLabel,
  FormHelperText,
  Stack,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/core';
import Link from 'next/link';

const Form = (props) => {
  const { name, confirmPassword, onSubmit, onChange, error } = props;
  return (
    <>
      <form onSubmit={onSubmit}>
        <FormControl paddingBottom={2} textAlign='left'>
          {name && (
            <FormControl>
              <FormLabel paddingTop={4}> Your name </FormLabel>
              <Input onChange={onChange} name='name' />
              <FormHelperText> Minimum 2 characters </FormHelperText>
            </FormControl>
          )}

          <FormLabel paddingTop={4}>Email</FormLabel>
          <Input
            onChange={onChange}
            name='email'
            placeholder='example@test.com'
          />

          <FormLabel paddingTop={4}>Password</FormLabel>
          <Input
            type='password'
            onChange={onChange}
            name='password'
            placeholder='12345'
          />
          <FormHelperText> Minimum 8 characters </FormHelperText>

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
          <Stack padding={5} paddingBottom={3}>
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
      {error && (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle> {error} </AlertTitle>
        </Alert>
      )}
      <Heading fontSize='md' paddingTop={3}>
        Or log in with Google
      </Heading>
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
