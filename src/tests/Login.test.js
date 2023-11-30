import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../components/Login.js';
import { BrowserRouter } from 'react-router-dom';

const Wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>

describe('Login Component', () => {
  test('renders form elements', () => {
    render(<Login />, { wrapper: Wrapper });
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i})).toBeInTheDocument();
  })
})


