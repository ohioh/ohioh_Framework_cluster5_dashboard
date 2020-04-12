import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AppRouter from 'router/AppRouter';
import { LoginForm } from 'container/Auth';
import { CheckLogin } from 'store/auth';
import MainLayout from 'container/Layout/MainLayout';
import { PreLoader } from 'ui';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CheckLogin());
  }, [dispatch]);

  const auth = useSelector(({ auth }) => auth);

  return (
    <Router>
      <>
        {auth.isAuth ? (
          <MainLayout>
            <AppRouter isAuth={auth.isAuth} />
          </MainLayout>
        ) : (
          <Route path='/' component={LoginForm} />
        )}
      </>
    </Router>
  );
}

export default App;
