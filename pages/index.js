import Head from 'next/head';
import { Stack } from '@chakra-ui/core';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Stack>
        <Navbar />
      </Stack>
    </>
  );
};

export default Home;
