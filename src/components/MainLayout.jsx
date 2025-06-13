"use client"

import React from 'react';
import { Outlet } from 'react-router-dom';
import StickyNav from './StickyNav'; // Assuming StickyNav is in the same directory

const MainLayout = () => {
  return (
    <>
      <StickyNav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout; 