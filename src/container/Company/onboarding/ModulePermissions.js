import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanies } from 'store/company';
import { PageHeader, Wrapper } from 'ui';

function ModulePermissions() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCompanies(params.toString()));
  // }, [dispatch, params.toString()]);

  // const { companies } = useSelector((state) => state.company);

  const headerData = {
    title: 'Module Permissions',
    buttons: [
      {
        label: 'Back',
        link: '/customer/onboard',
      },
    ],
  };
  return (
    <>
      <PageHeader headerData={headerData} />
      <Wrapper p={3} bg='white'>
        fasfa
      </Wrapper>
    </>
  );
}

export default ModulePermissions;
