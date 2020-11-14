import React from 'react';
import { fireEvent, act, render } from '../jest.setup';
import Form from '../components/Form';
import Login from '../pages/login';

describe('SignIn process', () => {
  const realLocation = window.location;
  beforeAll(() => {
    delete window.location;
    window.location = {
      assign: jest.fn(),
    };
  });

  afterAll(() => {
    window.location = realLocation;
  });

  test('Successful process should redirect', async () => {
    const expectedData = {
      email: 'test@test.com',
      password: 'hola',
    };
    const { getByText, getByLabelText } = render(<Login />);
    const email = getByLabelText('Email');
    const password = getByLabelText('Password');
    const signInButton = getByText('Done');

    await act(() => {
      fireEvent.change(email, { target: { value: expectedData.email } });
      fireEvent.change(password, { target: { value: expectedData.password } });
      fireEvent.click(signInButton);
    });

    expect(window.location.assign).toHaveBeenCalledWith('/');
  });
});
