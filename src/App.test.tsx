import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App test', () => {
  test('should show loading', () => {
    render(<App> </App>);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
