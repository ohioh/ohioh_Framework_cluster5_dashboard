import produce from 'immer';
import { keysToCamel } from 'utils';
import * as types from './survey.types';

const initialState = {
  templates: [],
  templatesPaginator: { total: null, current: null, pageSize: null },
  template: null,
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
      default:
        return state;
    }
  });
};
