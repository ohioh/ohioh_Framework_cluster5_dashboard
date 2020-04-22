import React, { useEffect } from 'react';
import _ from 'lodash';
import { useParams } from 'react-router';
import { Table } from 'antd';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper } from 'ui';
import { parseDate } from 'utils';
import { useQueryParams } from 'hooks';
import { getCompanySurveys } from 'store/survey';

const columns = [
  {
    title: 'Template',
    dataIndex: 'template',
    key: 'template',
  },
  {
    title: 'Schedule Type',
    dataIndex: 'scheduleType',
    key: 'scheduleType',
  },
  {
    title: 'Start Date',
    dataIndex: 'startDate',
    key: 'startDate',
  },
  {
    title: 'End Date',
    dataIndex: 'endDate',
    key: 'endDate',
  },
];

const CompanySurveys = () => {
  const param = useParams();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const dispatch = useDispatch();
  const { handleQueryParams } = useQueryParams();

  useEffect(() => {
    dispatch(getCompanySurveys(param.uuid, params.toString()));
  }, [dispatch, param.uuid, params.toString()]);

  const { companySurveys, companySurveysPaginator } = useSelector(
    (state) => state.survey
  );

  const renderCompanySurveys = () => {
    return _.map(companySurveys, (survey) => {
      return {
        key: survey.uuid,
        template: _.get(survey, 'template.name'),
        scheduleType: _.get(survey, 'scheduleType'),
        startDate: parseDate(_.get(survey, 'startDate')),
        endDate: parseDate(_.get(survey, 'endDate')),
      };
    });
  };

  const handlePagination = (paginator) => {
    handleQueryParams({ page: paginator.current });
  };
  return (
    <Wrapper>
      <Table
        columns={columns}
        dataSource={renderCompanySurveys()}
        pagination={companySurveysPaginator}
        onChange={(paginator) => {
          handlePagination(paginator);
        }}
      />
    </Wrapper>
  );
};

export default CompanySurveys;
