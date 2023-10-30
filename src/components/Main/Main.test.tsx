import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import Main from './Main';

const people = [{ name: 'Sam' }, { name: 'Tom' }, { name: 'Kate' }];

describe('Main test', () => {
  test('Card renders', () => {
    render(<Main people={[]} />);
    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
  });
  test('Card renders', () => {
    render(<Main people={people} />);
    expect(screen.getByText(/Kate/i)).toBeInTheDocument();
  });
});
