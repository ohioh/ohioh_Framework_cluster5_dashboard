import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Companies, CompanyDetails } from 'container/Company';
import { SurveySubRouter } from './';

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
      <PrivateRoute
        path='/customers/:uuid'
        component={CompanyDetails}
        {...props}
        exact
      />
      <PrivateRoute path='/customers' component={Companies} {...props} />
      <PrivateRoute path='/survey' component={SurveySubRouter} {...props} />
    </Switch>
  );
}
