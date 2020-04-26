import produce from 'immer';
import _ from 'lodash';
import { keysToCamel } from 'utils';
import * as types from './survey.types';

const initialState = {
  templates: [],
  templatesPaginator: { total: null, current: null, pageSize: null },
  template: null,
  companySurveys: [],
  companyForSurveys: {
    results: [],
    paginator: { total: null, current: null, pageSize: null },
  },
  defaultKey: '',
  companySurveysPaginator: { total: null, current: null, pageSize: null },
  companyForSurveysPaginator: { total: null, current: null, pageSize: null },
};

export const survey = (state = initialState, action) => {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case types.GET_SURVEY_TEMPLATES_SUCCESS:
        draft.templates = keysToCamel(payload.results);
        draft.templatesPaginator.total = payload.paginator.total_count;
        draft.templatesPaginator.current = payload.paginator.current_page;
        draft.templatesPaginator.pageSize = payload.paginator.page_size;

        break;
      case types.GET_SURVEY_TEMPLATE_SUCCESS:
        draft.template = keysToCamel(payload);
        break;
      case types.GET_COMPANIES_FOR_SURVEY_SUCCESS:
        draft.companyForSurveys.results = keysToCamel(payload.results);
        draft.companyForSurveys.paginator.total = payload.paginator.total_count;
        draft.companyForSurveys.paginator.current =
          payload.paginator.current_page;
        draft.companyForSurveys.paginator.pageSize =
          payload.paginator.page_size;
        draft.defaultKey = '';
        break;
      case types.GET_COMPANY_SURVEYS_SUCCESS:
        draft.companySurveys = keysToCamel(payload.results);
        draft.companySurveysPaginator.total = payload.paginator.total_count;
        draft.companySurveysPaginator.current = payload.paginator.current_page;
        draft.companySurveysPaginator.pageSize = payload.paginator.page_size;
        draft.defaultKey = _.isEmpty(payload.results) ? '2' : '1';
        break;
      default:
        return state;
    }
  });
};
