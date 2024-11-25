import React from 'react';
import { render, screen } from '@testing-library/react';
import Movie from './Movie';

test('renders movie title and year', () => {
  const movie = { Title: 'Inception', Year: '2010', Poster: 'N/A' };
  render(<Movie movie={movie} />);
  const titleElement = screen.getByText(/Inception/i);
  const yearElement = screen.getByText(/2010/i);
  expect(titleElement).toBeInTheDocument();
  expect(yearElement).toBeInTheDocument();
});

test('renders placeholder image if no poster is available', () => {
  const movie = { Title: 'Inception', Year: '2010', Poster: 'N/A' };
  render(<Movie movie={movie} />);
  const imgElement = screen.getByAltText(/Inception/i);
  expect(imgElement.src).toContain('https://via.placeholder.com/150');
});
