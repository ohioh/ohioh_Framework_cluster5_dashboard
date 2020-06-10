import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { getCompanies } from 'store/company';
import { PageHeader } from 'ui';

function Documentation() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // useEffect(() => {
  //   dispatch(getCompanies());
  // }, [dispatch]);

  const headerData = {
    title: 'Customers',
    buttons: [
      {
        label: 'Onboard A Customer Documentation',
        link: '/customer/onboard',
      },
    ],
  };
  return (
    <>
      <PageHeader headerData={headerData} />
    </>
  );
}

export default Documentation;
