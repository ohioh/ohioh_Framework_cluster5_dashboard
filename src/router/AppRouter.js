import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// const PrivateRoute = ({ component: Component, isAuth, authInfo, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuth ? (
//           authInfo.companyUUID ? (
//             <Component {...props} authInfo={authInfo} />
//           ) : (
//             <PreLoader />
//           )
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

export default function AppRouter(props) {
  return (
    <Switch>
      <Route path='/login' component={<h1>salan</h1>} />
    </Switch>
  );
}
