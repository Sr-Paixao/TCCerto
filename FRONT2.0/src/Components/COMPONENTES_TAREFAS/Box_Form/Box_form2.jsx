import React from 'react';

const Box2 = ({ children }) => {
  return (
    <div
      style={{
        boxShadow: '2px 0px 12px 5px rgba(0, 0, 0, 0.2)',
        width: '105%',
        height: '110%',
        borderRadius: '5px',
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '10px',
        marginLeft: '-2%',
        mt: 2.5
      }}
    >
      {children}
    </div>
  );
};

export default Box2;
