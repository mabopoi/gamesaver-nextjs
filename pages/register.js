import React, { useState } from 'react';
import Form from '../components/Form';
import { Stack, Heading } from '@chakra-ui/core';
import axios from 'axios';
import { validateData } from '../utils/validateData';
import { useRouter } from 'next/router';

const Register = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = await validateData(data);
    if (!validation.error) {
      const register = await axios.post(
        'http://localhost:3000/api/register',
        data
      );
      if (register.status == 201) {
        router.push('/login');
      } else {
        setError(register.data.message);
      }
    } else {
      setError(validation.error);
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
      <Heading>Create your account!</Heading>
      <Form
        onSubmit={handleSubmit}
        onChange={handleChange}
        name
        confirmPassword
        error={error}
      />
    </Stack>
  );
};

export default Register;
