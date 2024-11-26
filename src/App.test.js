import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store/Store';
import App from './App';

test('renders the header with the title "KACALAYAR12"', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headerElement = screen.getByText(/KACALAYAR12/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders search input and allows typing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const inputElement = screen.getByPlaceholderText(/Search for movies/i);
  fireEvent.change(inputElement, { target: { value: 'Spider-Man' } });
  expect(inputElement.value).toBe('Spider-Man');
});
