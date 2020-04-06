import React from 'react';
import { AppRouter } from 'router';
import MainLayout from 'container/Layout/MainLayout';
import './App.css';

function App() {
  return (
    <div className='App'>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </div>
  );
}

export default App;
