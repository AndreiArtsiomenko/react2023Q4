import { useEffect, useState } from 'react';
import './App.css';
import getData from './utils/api';
import { PeopleType } from './types/types';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

export default function App() {
  const [people, setPeople] = useState<PeopleType[]>([]);
  const [value, setValue] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const getDataState = (searchData: string) => {
    getData(searchData).then((res) => {
      setPeople(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    const searchParam = localStorage.getItem('searchParam') || '';
    setValue(searchParam);
    getDataState(searchParam);
  }, []);

  const handleChange = (search: string) => {
    setValue(search);
  };

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    localStorage.setItem('searchParam', value.trim());
    setLoading(true);
    getDataState(value);
  };

  return (
    <>
      <ErrorBoundary>
        <Header value={value} onChange={handleChange} onClick={handleSearch} />
      </ErrorBoundary>
      {loading ? (
        <h2 className={'loading'}>Loading...</h2>
      ) : (
        <ErrorBoundary>
          <Main people={people} />
        </ErrorBoundary>
      )}
    </>
  );
}
