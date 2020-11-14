import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@chakra-ui/core';

const chakraRenderer = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui, options) => {
  render(ui, {
    wrapper: chakraRenderer,
    ...options,
  });
};

export * from '@testing-library/react';
export { customRender as render };
