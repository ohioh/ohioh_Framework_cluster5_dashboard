import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Companies,
  CompanyDetails,
  OnboardCustomer,
  ModulePermissions,
  WorkerPlatforms,
} from 'container/Company';

const SurveySubRouter = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}/companies/:uuid`} component={CompanyDetails} />
      <Route path={`${url}/companies`} component={Companies} />
      <Route path={`${url}/onboard`} component={OnboardCustomer} />
      <Route path={`${url}/module-permission`} component={ModulePermissions} />
      <Route path={`${url}/worker-platforms`} component={WorkerPlatforms} />
    </Switch>
  );
};

export default SurveySubRouter;
