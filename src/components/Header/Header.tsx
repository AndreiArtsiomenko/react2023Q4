import { Context } from '../../Context';
import style from './Header.module.css';
import { useContext, useState } from 'react';

interface HeaderProps {
  onChange: (e: string) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Header({ onChange, onClick }: HeaderProps) {
  const [error, setError] = useState<boolean>(false);
  const { valueSearch } = useContext(Context);

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
          value={valueSearch}
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
