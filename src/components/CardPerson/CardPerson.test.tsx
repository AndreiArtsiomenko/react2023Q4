import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardPerson from './CardPerson';

const person = { name: 'Luke', gender: 'male' };

describe('CardPerson test', () => {
  test.skip('CardPerson renders without data', () => {
    render(<CardPerson person={{}} />);
    expect(screen.getByText(/Luke/i)).not.toBeInTheDocument();
  });
  test('CardPerson renders with data', () => {
    render(<CardPerson person={person} />);
    expect(screen.getByText(/Luke/i)).toBeInTheDocument();
  });
});
