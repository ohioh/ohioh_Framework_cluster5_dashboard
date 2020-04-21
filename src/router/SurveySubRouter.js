import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  SurveyTemplates,
  SurveyTemplate,
  CompanySurveys,
  CompanySurveySchedules,
} from 'container/survey';

const SurveySubRouter = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}/templates/:uuid`} component={SurveyTemplate} />
      <Route path={`${url}/templates`} component={SurveyTemplates} />
      <Route path={`${url}/company/:uuid`} component={CompanySurveySchedules} />
      <Route path={`${url}/company`} component={CompanySurveys} />
    </Switch>
  );
};

export default SurveySubRouter;
