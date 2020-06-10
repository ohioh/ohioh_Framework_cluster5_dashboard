import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { getCompanies } from 'store/company';
import { PageHeader } from 'ui';

function KeyGeneration() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCompanies());
  // }, [dispatch]);

  const handleKeyGenerate = () => {
    console.log('key generate');
  };

  const headerData = {
    title: 'Customers',
    buttons: [
      {
        label: 'Key Generate',
        method: handleKeyGenerate,
      },
    ],
  };
  return (
    <>
      <PageHeader headerData={headerData} />
    </>
  );
}

export default KeyGeneration;
