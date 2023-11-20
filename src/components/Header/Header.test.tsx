import { beforeEach, afterEach, describe, expect, test, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Header from './Header';
import App from '../../App';

const onChange = vi.fn();
const onClick = vi.fn();

describe('testing LocalStorage', () => {
  const handleSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const valueSearch = 'ItemSave';
    localStorage.setItem('searchParam', valueSearch);
  };

  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSearch(event);

  beforeEach(() => {
    render(<Header onChange={onChange} onClick={onClick}></Header>);
  });

  afterEach(() => {
    cleanup();
  });

  test('save value in localStorage', async () => {
    await userEvent.click(screen.getByText(/Search/i));
    expect(localStorage.getItem('searchParam')).toBe('ItemSave');
  });

  test('get value from localStorage', async () => {
    render(<App></App>);
    expect(screen.getByDisplayValue('ItemSave')).toBeInTheDocument();
  });
});

describe('testing render Header', () => {
  beforeEach(() => {
    render(<Header onChange={onChange} onClick={onClick}></Header>);
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
});
