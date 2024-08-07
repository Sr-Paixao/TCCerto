import React from 'react';

const Box1 = ({ children }) => {
  return (
    <div
      style={{
        boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)',
        width: '105%',
        height: '110%',
        borderRadius: '5px',
        marginTop: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        marginLeft: '-2%',
        mt: 2.5
      }}
    >
      {children}
    </div>
  );
};

export default Box1;
