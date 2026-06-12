// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BlockBuy title', () => {
    render(<App />);
    const titleElement = screen.getByText(/BlockBuy/i);
    expect(titleElement).toBeInTheDocument();
});
