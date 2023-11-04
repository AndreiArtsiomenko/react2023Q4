import style from './Header.module.css';
import { useState } from 'react';

interface HeaderProps {
  value: string;
  onChange: (e: string) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Header({ value, onChange, onClick }: HeaderProps) {
  const [error, setError] = useState<boolean>(false);

  if (error) {
    throw Error('Error!!!');
  }
  return (
    <header className={style.header}>
      <h1>The Star Wars</h1>
      <div>
        <input
          className={style.search}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button type="submit" onClick={(e) => onClick(e)}>
          Search
        </button>
        <button style={{ marginLeft: '1rem' }} onClick={() => setError(true)}>
          Error
        </button>
      </div>
    </header>
  );
}
