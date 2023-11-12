import { describe, expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import Main from './Main';

const onChange = vi.fn();
const currentPage = '1';
const countPeople = '10';

describe('Main test', () => {
  test('Card renders', () => {
    render(
      <Main
        setPeople={onChange}
        countPeople={countPeople}
        currentPage={currentPage}
        setCurrentPage={onChange}
      />
    );
    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
  });
  test.skip('Card renders', () => {
    render(
      <Main
        setPeople={onChange}
        countPeople={countPeople}
        currentPage={currentPage}
        setCurrentPage={onChange}
      />
    );
    expect(screen.getByText(/Kate/i)).toBeInTheDocument();
  });
});
