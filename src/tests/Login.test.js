import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../components/Login.js';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const Wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>

describe('Login Component', () => {
  test('renders form elements', () => {
    render(<Login />, { wrapper: Wrapper });
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i})).toBeInTheDocument();
  });

  test('user can enter username and password', async () => {
    render(<Login />, { wrapper: Wrapper });

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    await userEvent.type(usernameInput, 'testuser');
    await userEvent.type(passwordInput, 'testpassword');

    expect(usernameInput.value).toBe('testuser');
    expect(passwordInput.value).toBe('testpassword');
  });
})


