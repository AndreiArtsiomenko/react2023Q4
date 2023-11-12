import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Main from './components/Main/Main';
import Person from './components/Person/Person';
import { getPerson } from './utils/api';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Main />}>
        <Route path="people/:id" element={<Person />} loader={getPerson} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
