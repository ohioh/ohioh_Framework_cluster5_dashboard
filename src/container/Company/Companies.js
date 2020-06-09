import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUserKeys } from 'store/company';
import { PageHeader, Customers } from 'ui';

function Companies() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  useEffect(() => {
    dispatch(getUserKeys(params.toString()));
  }, [dispatch, params.toString()]);

  const { companies } = useSelector((state) => state.company);

  const headerData = {
    title: 'Customers',
    buttons: [
      {
        label: 'Generate Key',
        link: '/customer/onboard',
      },
    ],
  };
  return (
    <>
      <PageHeader headerData={headerData} />
      <Customers companies={companies} />
    </>
  );
}

export default Companies;
