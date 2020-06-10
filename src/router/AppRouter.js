import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Documentation, KeyGeneration } from 'container/Layout';

const PrivateRoute = ({ component: Component, isAuth, authInfo, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} authInfo={authInfo} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};

export default function AppRouter(props) {
  return (
    <Switch>
      <Route path='/key-generation' component={KeyGeneration} {...props} />
      <Route path='/documentation' component={Documentation} {...props} />
    </Switch>
  );
}
