import produce from 'immer';
import { keysToCamel } from 'utils';
import {
  GET_COMPANIES_SUCCESS,
  GET_COMPANY_DETAILS_SUCCESS,
  GET_MODULE_PERMISSION_SUCCESS,
  UPDATE_MODULE_PERMISSIONS_SUCCESS,
  CREATE_COMPANY_SUCCESS,
  CREATE_MESSAGE_WORKER_PLATFORM_SUCCESS,
  GET_COMPANY_SURVEYS_SUCCESS,
  GET_COMPANY_ADMINS_SUCCESS,
  GET_COMPANY_SETUPINFO_SUCCESS,
  GET_DEMO_COMPANIES_SUCCESS,
} from './company.types';

const initialState = {
  companies: {
    paginator: {
      total: null,
      current: null,
      pageSize: null,
    },
    results: [],
  },
  createCompany: null,
  detail: {
    package: {
      max_sms: 0,
      max_workers: 0,
    },
  },
  admins: [],
  surveys: [],
  permissions: {},
  companySetupInfo: {
    factories: [
      {
        name: null,
      },
    ],
    departments: [
      {
        name: null,
      },
    ],
    positions: [
      {
        name: null,
      },
    ],
  },
  demoCompanies: { paginator: {}, results: [] },
};

export const company = (state = initialState, action) => {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case GET_COMPANIES_SUCCESS:
        draft.companies.paginator.total = payload.paginator.total_count;
        draft.companies.paginator.current = payload.paginator.current_page;
        draft.companies.paginator.pageSize = payload.paginator.page_size;
        draft.companies.results = keysToCamel(payload.results);
        break;
      case GET_COMPANY_DETAILS_SUCCESS:
        draft.detail = keysToCamel(payload);
        break;
      case CREATE_COMPANY_SUCCESS:
        draft.createCompany = true;
        draft.detail = keysToCamel(payload);
        break;
      case GET_MODULE_PERMISSION_SUCCESS:
        draft.permissions = keysToCamel(payload);
        break;
      case GET_COMPANY_ADMINS_SUCCESS:
        draft.admins = keysToCamel(payload);
        break;
      case UPDATE_MODULE_PERMISSIONS_SUCCESS:
        draft.permissions = payload;
        break;
      case CREATE_MESSAGE_WORKER_PLATFORM_SUCCESS:
        draft.createCompany = false;
        break;
      case GET_COMPANY_SETUPINFO_SUCCESS:
        draft.companySetupInfo = keysToCamel(payload);
        break;
      case GET_DEMO_COMPANIES_SUCCESS:
        draft.demoCompanies = keysToCamel(payload);
        break;
      case GET_COMPANY_SURVEYS_SUCCESS:
        draft.surveys = keysToCamel(payload);
        break;
      default:
        return state;
    }
  });
};
