// Wrapper.js
import React from 'react';

function Wrapper({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {children}
    </div>
  );
}

export default Wrapper;
