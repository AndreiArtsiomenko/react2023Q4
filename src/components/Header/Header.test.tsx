import { beforeEach, afterEach, describe, expect, test, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Header from './Header';

const onChange = vi.fn();
const onClick = vi.fn();

describe('Header test', () => {
  beforeEach(() => {
    render(<Header value="" onChange={onChange} onClick={onClick}></Header>);
  });
  afterEach(() => {
    cleanup();
  });
  test('render header', () => {
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
  });
  test('onChange works', async () => {
    await userEvent.type(screen.getByRole('textbox'), 'React');
    expect(onChange).toHaveBeenCalledTimes(5);
  });
  test('onClick works', async () => {
    await userEvent.click(screen.getByText(/Search/i));
    expect(onChange).toHaveBeenCalled();
  });
});
