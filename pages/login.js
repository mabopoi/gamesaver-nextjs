import React, { useState } from 'react';
import { Stack, Heading } from '@chakra-ui/core';
import Form from '../components/Form';

const Login = () => {
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('test');
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
  };

  return (
    <Stack textAlign='center' minHeight='70vh' align='center' justify='center'>
      <Heading>Sign in!</Heading>
      <Form onSubmit={handleSubmit} onChange={handleChange} />
    </Stack>
  );
};

export default Login;
