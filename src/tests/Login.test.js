import { render, screen } from '@testing-library/react';
import Login from '../components/Login.js';
import { BrowserRouter } from 'react-router-dom';

describe('renders login', () => {
  /* eslint-disable testing-library/no-render-in-setup */
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  test('username text box', () => {
    const usernameElement = screen.getByRole('textbox', {name: "Username:"});
    expect(usernameElement).toBeInTheDocument();
  });

  test('password text box', () => {
    const passwordElement = screen.getByLabelText(/password:/i);
    expect(passwordElement).toBeInTheDocument();
  })

  test('sign-in button', () => {
    const loginButton = screen.getByRole('button', {name: 'Sign In'})
    expect(loginButton).toBeInTheDocument();
  })

});
