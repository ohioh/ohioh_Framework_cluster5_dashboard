import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppRouter from 'router/AppRouter';
import MainLayout from 'container/Layout/MainLayout';
import './App.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </Router>
  );
}

export default App;
