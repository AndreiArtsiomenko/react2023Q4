import React from 'react';
import style from './Layout.module.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={style.container}>
      <Outlet />
    </div>
  );
};

export default Layout;
