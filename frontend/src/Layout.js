// Layout.js
import React from 'react';
import Header from './components/Header'; // Adjust the import path
import Footer from './components/Footer'; // Adjust the import path
import Wrapper from './Wrapper';

function Layout({ children }) {
  return (
    <div>
      <Header />
      
      <Wrapper>
      <main>{children}</main>
      </Wrapper>
      
      <Footer />
    </div>
  );
}

export default Layout;
