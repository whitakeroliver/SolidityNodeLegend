// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityNodeLegend title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityNodeLegend/i);
    expect(titleElement).toBeInTheDocument();
});
