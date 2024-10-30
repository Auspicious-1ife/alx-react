// import logo from './logo.svg';
import React from 'react';
import holbertonlogo from './holbertonlogo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonlogo} className="holbertonlogo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
                <p>Login to access the full dashboard</p>
            </body>
            <footer className="App-footer">
                <p>Copyright 2020 - Holberton School</p>
            </footer>
    </div>
  );
}

export default App;
