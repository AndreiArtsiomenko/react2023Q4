import { useEffect, useState } from 'react';

import './App.css';
import { getPeople } from './utils/api';
import { PeopleType } from './types/types';

import Header from './components/Header/Header';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Outlet } from 'react-router-dom';
import Loading from './components/Loading/Loading';

export default function App() {
  const [people, setPeople] = useState<PeopleType[]>([]);
  const [valueSearch, setValueSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [countPeople, setCountPeople] = useState<string>('');
  const [currentPage, setCurrentPage] = useState('1');

  const getDataState = (searchData: string) => {
    getPeople(searchData).then((res) => {
      setPeople(res.results);
      setCountPeople(res.count);
      setLoading(false);
    });
  };

  useEffect(() => {
    const searchParam = localStorage.getItem('searchParam') || '';
    setValueSearch(searchParam);
    getDataState(searchParam);
  }, []);

  const handleChange = (search: string) => {
    setValueSearch(search);
  };

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    localStorage.setItem('searchParam', valueSearch.trim());
    setCurrentPage('1');
    setLoading(true);
    getDataState(valueSearch);
  };

  return (
    <>
      <ErrorBoundary>
        <Header value={valueSearch} onChange={handleChange} onClick={handleSearch} />
      </ErrorBoundary>
      {loading ? (
        <Loading />
      ) : (
        <ErrorBoundary>
          <Outlet
            context={[people, setPeople, countPeople, valueSearch, currentPage, setCurrentPage]}
          />
        </ErrorBoundary>
      )}
    </>
  );
}
