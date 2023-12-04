import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import './index.css';
import { store } from './store/store';
import App from './components/App/App';
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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
