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
    successMessage: 'Survey schedule created successfully',
    errorMessage: 'Survey schedule not created',
  },
});

// Start survey template builder
export const storeSurveyBasicInfo = (surveyBasicInfo) => ({
  type: types.STORE_SURVEY_BASIC_INFO,
  payload: surveyBasicInfo,
  meta: {
    api: false,
  },
});

export const storeSurveyQuestions = (surveyQuestions) => ({
  type: types.STORE_SURVEY_QUESTIONS,
  payload: surveyQuestions,
  meta: {
    api: false,
  },
});

export const addSurveyQuestion = () => ({
  type: types.ADD_SURVEY_QUESTION,
  meta: {
    api: false,
  },
});

export const updateSurveyQuestion = (questionData) => ({
  type: types.UPDATE_SURVEY_QUESTIONS,
  payload: questionData,
  meta: {
    api: false,
  },
});

export const setLastSurveyQuestion = () => ({
  type: types.SET_LAST_SURVEY_QUESTION,
  meta: {
    api: false,
  },
});

export const deleteSurveyQuestion = (questionData) => ({
  type: types.DELETE_SURVEY_QUESTION,
  payload: questionData,
  meta: {
    api: false,
  },
});

export const addSurveyAnswer = (answerData) => ({
  type: types.ADD_SURVEY_ANSWER,
  payload: answerData,
  meta: {
    api: false,
  },
});

export const updateSurveyAnswer = (answerData) => ({
  type: types.UPDATE_SURVEY_ANSWER,
  payload: answerData,
  meta: {
    api: false,
  },
});

export const deleteSurveyAnswer = (answerData) => ({
  type: types.DELETE_SURVEY_ANSWER,
  payload: answerData,
  meta: {
    api: false,
  },
});

export const createSurveyTemplate = (surveyData) => ({
  type: types.CREATE_SURVEY_TEMPLATE,
  payload: {
    path: `/survey/templates`,
    method: 'POST',
    data: surveyData,
  },
  meta: {
    api: true,
    successMessage: 'Survey created successfullyy',
    errorMessage: 'Survey not created',
  },
});
