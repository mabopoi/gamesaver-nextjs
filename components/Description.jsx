import React from 'react';
import { Stack, Text, Heading, Image } from '@chakra-ui/core';
import { css } from '@emotion/core';

const Description = () => (
  <Stack marginBottom={0}>
    <Stack
      bg='teal.200'
      marginTop={4}
      justifyContent='space-evenly'
      isInline
      alignItems='center'
      css={css`
        @media (max-width: 768px) {
          display: grid;
        }
      `}
    >
      <Stack textAlign='center' alignContent='center'>
        <Heading as='i'>How does it work?</Heading>
        <Text>This is a simple app where you can save your chess games!</Text>
        <Text>It doesn't matter where you have played them</Text>
        <Text>
          You will be able to filter them in your profile by tournament, date,
          etc.
        </Text>
      </Stack>
      <Stack alignItems='center'>
        <Image
          maxWidth='500px'
          src='undraw_Personal_notebook_re_d7dc.svg'
          marginTop={2}
          css={css`
            @media (max-width: 576px) {
              max-width: 350px;
            }
          `}
        />
      </Stack>
      //Dowloaded from undraw.co
    </Stack>
    <Stack
      bg='teal.300'
      marginTop={-2}
      justifyContent='space-evenly'
      alignItems='center'
      isInline
    >
      <Image
        maxWidth='500px'
        src='undraw_pcsocial_16rw.svg'
        css={css`
          @media (max-width: 768px) {
            max-width: 400px;
          }
          @media (max-width: 576px) {
            max-width: 290px;
          }
          @media (max-width: 480px) {
            max-width: 230px;
          }
        `}
      />
      <Stack textAlign='center' marginRight={4}>
        <Heading as='i'>How can you use it?</Heading>
        <Text>You just have to log in with your favourite social media!</Text>
        <Text>It's that easy!</Text>
      </Stack>
    </Stack>
  </Stack>
);

export default Description;
