import * as types from './company.types';

export const getCountries = () => ({
  type: types.GET_COUNTRIES,
  payload: {
    path: `/common/countries`,
    method: 'GET',
  },
  meta: {
    api: true,
  },
});

export const getPackages = () => ({
  type: types.GET_PACKAGES,
  payload: {
    path: `/common/packages`,
    method: 'GET',
  },
  meta: {
    api: true,
  },
});

export const getCouriers = () => ({
  type: types.GET_COURIERS,
  payload: {
    path: `/common/couriers`,
    method: 'GET',
  },
  meta: {
    api: true,
  },
});

export const getLanguages = () => ({
  type: types.GET_LANGUAGES,
  payload: {
    path: `/common/languages`,
    method: 'GET',
  },
  meta: {
    api: true,
  },
});

export const getCompanies = (query = '') => ({
  type: types.GET_COMPANIES,
  payload: {
    path: `/org/companies?${query}`,
    method: 'GET',
  },
  meta: {
    api: true,
  },
});

export const getCompanyDetails = (companyUUID) => ({
  type: types.GET_COMPANY_DETAILS,
  payload: {
    path: `/org/companies/${companyUUID}`,
    method: 'GET',
  },
  meta: {
    api: true,
  },
});

export const getCompanySetupInfo = (companyUUID) => ({
  type: types.GET_COMPANY_SETUPINFO,
  payload: {
    path: `/org/companies/${companyUUID}/company-setup`,
    method: 'GET',
  },
  meta: {
    api: true,
  },
});

export const createCompany = (payload) => ({
  type: types.CREATE_COMPANY,
  payload: {
    path: `/org/companies`,
    method: 'POST',
    data: payload,
  },
  meta: {
    api: true,
    successMessage: 'Company created successfully',
    errorMessage: 'Company not created',
  },
});

export const getCompanySurveys = (companyUUID) => ({
  type: types.GET_COMPANY_SURVEYS,
  payload: {
    path: `/companies/${companyUUID}/company-survey`,
    method: 'GET',
  },
  meta: {
    api: true,
    errorMessage: 'Default survey not found',
  },
});

export const createMessageWorkerPlatform = (companyUUID, payload) => ({
  type: types.CREATE_MESSAGE_WORKER_PLATFORM,
  payload: {
    path: `/companies/${companyUUID}/worker-platforms`,
    method: 'POST',
    data: payload,
  },
  meta: {
    api: true,
    successMessage: 'Message sent successfully',
    errorMessage: 'Message not sent',
  },
});

export const updateCompanyPermissions = (companyUUID, payload) => ({
  type: types.UPDATE_MODULE_PERMISSIONS,
  payload: {
    path: `/companies/${companyUUID}/modules`,
    method: 'PUT',
    data: payload,
  },
  meta: {
    api: true,
    successMessage: 'Permissions Updated successfuly !',
    errorMessage: 'Permissions not updated !',
  },
});

export const getCompanySubscriptions = (companyUUID) => ({
  type: types.GET_COMPANY_SUBSCRIPTIONS,
  payload: {
    path: `/org/companies/${companyUUID}/subscription`,
    method: 'GET',
  },
  meta: {
    api: true,
  },
});

export const getCompanyPrimaryAdmins = (companyUUID) => ({
  type: types.GET_COMPANY_PRIMARY_ADMINS,
  payload: {
    path: `/org/companies/${companyUUID}/admins?is_primary_admin=true`,
    method: 'GET',
  },
  meta: {
    api: true,
  },
});

export const getCompanyAdmins = (companyUUID) => ({
  type: types.GET_COMPANY_ADMINS,
  payload: {
    path: `/org/companies/${companyUUID}/admins?is_primary_admin=false&role=admin`,
    method: 'GET',
  },
  meta: {
    api: true,
  },
});

export const getCompanyManagers = (companyUUID) => ({
  type: types.GET_COMPANY_MANAGERS,
  payload: {
    path: `/org/companies/${companyUUID}/admins?is_primary_admin=false&role=manager`,
    method: 'GET',
  },
  meta: {
    api: true,
  },
});
