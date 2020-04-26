import * as types from './survey.types';

export const getCompaniesForSurvey = (query = '') => ({
  type: types.GET_COMPANIES_FOR_SURVEY,
  payload: {
    path: `/org/companies?modules=engage&${query}`,
    method: 'GET',
  },
  meta: {
    api: true,
    errorMessage: 'Company not found',
  },
});

export const getSurveyTemplates = () => ({
  type: types.GET_SURVEY_TEMPLATES,
  payload: {
    path: `/survey/templates`,
    method: 'GET',
  },
  meta: {
    api: true,
    errorMessage: 'Survey Templates not found',
  },
});

export const getSurveyTemplate = (templateUUID) => ({
  type: types.GET_SURVEY_TEMPLATE,
  payload: {
    path: `/survey/templates/${templateUUID}`,
    method: 'GET',
  },
  meta: {
    api: true,
    errorMessage: 'Survey Template not found',
  },
});

export const getCompanySurveys = (companyUUID, query = '') => ({
  type: types.GET_COMPANY_SURVEYS,
  payload: {
    path: `/survey/company-schedules/${companyUUID}?${query}`,
    method: 'GET',
  },
  meta: {
    api: true,
    errorMessage: 'Surveys not found',
  },
});

export const createCompanySurveySchedule = (payload, companyUUID) => ({
  type: types.CREATE_COMPANY_SURVEY_SCHEDULE,
  payload: {
    path: `/survey/company-schedules/${companyUUID}`,
    method: 'POST',
    data: payload,
  },
  meta: {
    api: true,
    errorMessage: 'Survey schedule not created',
  },
});
