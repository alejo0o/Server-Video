import React from 'react';
import NavBar from './Navigation';
import Footer from './Footer';
import '../styles/global.css';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
