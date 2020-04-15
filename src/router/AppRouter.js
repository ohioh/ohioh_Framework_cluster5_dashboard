import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Company, CompanyDetails } from 'container/Company';

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
        path='/customer/detail'
        component={CompanyDetails}
        {...props}
      />
      <PrivateRoute path='/customer' component={Company} {...props} />
    </Switch>
  );
}
