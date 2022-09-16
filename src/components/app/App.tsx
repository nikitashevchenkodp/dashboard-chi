import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import AppRouter from '../app-router/app-router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
