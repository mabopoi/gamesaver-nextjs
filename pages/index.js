import Head from 'next/head';
import { Stack } from '@chakra-ui/core';
import Introduction from '../components/Introduction';
import Description from '../components/Description';

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Stack>
        <Introduction />
        <Description />
      </Stack>
    </>
  );
};

export default Home;
