import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import { MemoryRouter } from 'react-router-dom';

describe.skip('', () => {
  test('landing on a bad page', () => {
    render(
      <MemoryRouter initialEntries={['/3']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
