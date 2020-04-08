import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppRouter from 'router/AppRouter';
import { Login } from 'container/Auth';
import MainLayout from 'container/Layout/MainLayout';
import './App.css';

function App() {
  return (
    <Router>
      {/* <MainLayout>
        <AppRouter />
      </MainLayout> */}
      <Route path='/login' component={Login} />
    </Router>
  );
}

export default App;
