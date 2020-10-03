import React, { useState } from 'react';
import Form from '../components/Form';
import { Stack, Heading } from '@chakra-ui/core';

const register = () => {
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
      <Heading>Create your account!</Heading>
      <Form
        onSubmit={handleSubmit}
        onChange={handleChange}
        name
        confirmPassword
      />
    </Stack>
  );
};

export default register;
