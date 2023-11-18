import { beforeEach, afterEach, describe, expect, test, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Pagination from './Pagination';
import userEvent from '@testing-library/user-event';

const onChange = vi.fn();

const countPeople = '10';
const currentPage = '1';

describe('testing render Pagination', () => {
  const handleClick = vi.fn();

  beforeEach(() => {
    render(
      <Pagination
        countPeople={countPeople}
        setPeople={onChange}
        currentPage={currentPage}
        setCurrentPage={onChange}
      />
    );
  });

  afterEach(() => {
    cleanup();
  });

  test('render pagination', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test.skip('click button', async () => {
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalled();
  });
});
