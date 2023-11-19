import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import Main from './components/Main/Main';

export default function App() {
  const [currentPage, setCurrentPage] = useState('1');

  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Main currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </ErrorBoundary>
    </>
  );
}
