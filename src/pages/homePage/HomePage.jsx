import React from 'react';

const HomePage = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Welcome to Contact App</h1>
      <p>In order to use it, please register first!</p>
    </div>
  );
};

export default HomePage;
