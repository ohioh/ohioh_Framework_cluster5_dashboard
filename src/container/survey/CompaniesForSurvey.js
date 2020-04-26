import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCompaniesForSurvey } from 'store/survey';
import { PageHeader, Customers } from 'ui';

function CompaniesForSurvey() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  useEffect(() => {
    dispatch(getCompaniesForSurvey(params.toString()));
  }, [dispatch, params.toString()]);
  const { companyForSurveys } = useSelector((state) => state.survey);

  const headerData = {
    title: 'Company Surveys',
  };
  return (
    <>
      <PageHeader headerData={headerData} />
      <Customers companies={companyForSurveys} />
    </>
  );
}

export default CompaniesForSurvey;
