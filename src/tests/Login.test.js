import { render, screen } from '@testing-library/react';
import Login from '../components/Login.js';
import { BrowserRouter } from 'react-router-dom';

describe('renders login', () => {
  test('username text box', () => {
    render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
    );
    const usernameElement = screen.getByRole('textbox', {name: "Username:"});
    expect(usernameElement).toBeInTheDocument();
  });

  test('password text box', () => {
    render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
    );
    const passwordElement = screen.getByLabelText(/password:/i);
    expect(passwordElement).toBeInTheDocument();
  })

  test('sign-in button', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const loginButton = screen.getByRole('button', {name: 'Sign In'})
    expect(loginButton).toBeInTheDocument();
  })

});
