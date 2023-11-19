import style from './Header.module.css';
import { useState } from 'react';
import { changePage, handleChange } from '../../store/peopleSlice';
import { useChangeSearchMutation } from '../../store/apiSlice';
import { useDispatch } from 'react-redux';

export default function Header() {
  const [error, setError] = useState<boolean>(false);
  const [value, setValue] = useState(localStorage.getItem('searchParam') || '');

  const [changeSearch] = useChangeSearchMutation();
  const dispatch = useDispatch();

  const handleSearch = () => {
    localStorage.setItem('searchParam', value);
    dispatch(handleChange(value));
    dispatch(changePage('1'));
    changeSearch({ search: value, page: '1' });
  };

  if (error) {
    throw new Error('Error!!!');
  }
  return (
    <header className={style.header}>
      <h1>The Star Wars</h1>
      <div>
        <input
          className={style.search}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => handleSearch()}>Search</button>
        <button style={{ marginLeft: '1rem' }} onClick={() => setError(true)}>
          Error
        </button>
      </div>
    </header>
  );
}
