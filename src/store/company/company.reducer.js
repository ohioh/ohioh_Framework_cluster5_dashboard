import produce from 'immer';
import { keysToCamel } from 'utils';
import * as types from './company.types';

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
  companyDetails: {
    package: {
      max_sms: 0,
      max_workers: 0,
    },
  },
  primaryAdmins: [],
  admins: [],
  managers: [],
  surveys: [],
  modules: {},
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
      case types.GET_COMPANIES_SUCCESS:
        draft.companies.paginator.total = payload.paginator.total_count;
        draft.companies.paginator.current = payload.paginator.current_page;
        draft.companies.paginator.pageSize = payload.paginator.page_size;
        draft.companies.results = keysToCamel(payload.results);
        break;
      case types.GET_COMPANY_DETAILS_SUCCESS:
        draft.companyDetails = keysToCamel(payload);
        break;
      case types.CREATE_COMPANY_SUCCESS:
        draft.createCompany = true;
        draft.companyDetails = keysToCamel(payload);
        break;
      case types.GET_MODULE_PERMISSION_SUCCESS:
        draft.modules = keysToCamel(payload);
        break;
      case types.GET_COMPANY_PRIMARY_ADMINS_SUCCESS:
        draft.primaryAdmins = keysToCamel(payload);
        break;
      case types.GET_COMPANY_ADMINS_SUCCESS:
        draft.admins = keysToCamel(payload);
        break;
      case types.GET_COMPANY_MANAGERS_SUCCESS:
        draft.managers = keysToCamel(payload);
        break;
      case types.UPDATE_MODULE_PERMISSIONS_SUCCESS:
        draft.modules = payload;
        break;
      case types.CREATE_MESSAGE_WORKER_PLATFORM_SUCCESS:
        draft.createCompany = false;
        break;
      case types.GET_COMPANY_SETUPINFO_SUCCESS:
        draft.companySetupInfo = keysToCamel(payload.results);
        break;
      case types.GET_DEMO_COMPANIES_SUCCESS:
        draft.demoCompanies = keysToCamel(payload);
        break;
      case types.GET_COMPANY_SURVEYS_SUCCESS:
        draft.surveys = keysToCamel(payload);
        break;
      default:
        return state;
    }
  });
};
