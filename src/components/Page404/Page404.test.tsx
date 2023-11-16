import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import { MemoryRouter } from 'react-router-dom';

describe.skip('test Page 404', () => {
  test('render page', () => {
    render(
      <MemoryRouter initialEntries={['/bad']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
  });
  test.skip('landing on a bad page', () => {
    const badRoute = '*';
    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
