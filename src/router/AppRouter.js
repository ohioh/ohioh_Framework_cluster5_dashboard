import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { SurveySubRouter, CompanySubRouter } from './';

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
      <PrivateRoute path='/customer' component={CompanySubRouter} {...props} />
      <PrivateRoute path='/survey' component={SurveySubRouter} {...props} />
    </Switch>
  );
}
