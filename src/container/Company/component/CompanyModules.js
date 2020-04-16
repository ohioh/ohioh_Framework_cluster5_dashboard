import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanyModules } from 'store/company';
import { Wrapper } from 'ui';

const CompanyModules = () => {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyModules(param.uuid));
  }, [dispatch]);

  const { modules } = useSelector((state) => state.company);
  // console.log(modules);
  return <div>CompanyModules</div>;
};

export default CompanyModules;
