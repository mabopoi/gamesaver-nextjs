import React, { useState } from 'react';
import { Stack, Heading } from '@chakra-ui/core';
import Form from '../components/Form';
import axios from 'axios';

const Login = () => {
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = await axios.post('http://localhost:3000/api/login', data);

    if (login.status == 200) {
      window.location.assign('/'); //refresh page automatically, not like router.push
    } else {
      console.log('error');
    }
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
