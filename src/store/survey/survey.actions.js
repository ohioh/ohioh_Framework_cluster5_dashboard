import * as types from './survey.types';

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
