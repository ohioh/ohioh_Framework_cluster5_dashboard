import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  SurveyTemplates,
  SurveyTemplate,
  CompaniesForSurvey,
  CompanySurveySchedules,
  BasicInfoForm,
  QuestionsForm,
} from 'container/survey';

const SurveySubRouter = ({ match: { url } }) => {
  return (
    <Switch>
      <Route path={`${url}/templates/:uuid`} component={SurveyTemplate} />
      <Route path={`${url}/templates`} component={SurveyTemplates} />
      <Route path={`${url}/template/create`} component={BasicInfoForm} />
      <Route path={`${url}/template/questions`} component={QuestionsForm} />
      <Route path={`${url}/company/:uuid`} component={CompanySurveySchedules} />
      <Route path={`${url}/company`} component={CompaniesForSurvey} />
    </Switch>
  );
};

export default SurveySubRouter;
