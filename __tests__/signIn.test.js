import React from 'react';
import { fireEvent, act, render, waitFor } from '../jest.setup';
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
    const handleSubmit = jest.fn();
    handleSubmit.mockReturnValue(window.location.assign('/'));
    const { getByText, getByPlaceholderText } = render(<Login />);
    const email = getByPlaceholderText('example@test.com');
    const password = getByPlaceholderText('password');
    const signInButton = getByText('Done');

    act(() => {
      fireEvent.change(email, { target: { value: expectedData.email } });
      fireEvent.change(password, { target: { value: expectedData.password } });
      fireEvent.click(signInButton);
    });

    await waitFor(() => expect(window.location.assign).toBeCalledWith('/'));
  });
});
