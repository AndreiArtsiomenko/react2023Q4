import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from './components/App/App';
import './index.css';
import FirstForm from './components/FirstForm/FirstForm';
import Layout from './components/Layout/Layout';
import SecondForm from './components/SecondForm/SecondForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="first" element={<FirstForm />} />
      <Route path="second" element={<SecondForm />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
