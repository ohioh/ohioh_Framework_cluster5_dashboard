import React from 'react';
import _ from 'lodash';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { Wrapper } from 'ui';
import { parseDate } from 'utils';
import { useQueryParams } from 'hooks';

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
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
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
  const { handleQueryParams } = useQueryParams();

  const { companySurveys, companySurveysPaginator } = useSelector(
    (state) => state.survey
  );

  const renderCompanySurveys = () => {
    return _.map(companySurveys, (survey) => {
      return {
        key: survey.uuid,
        template: _.get(survey, 'template.name'),
        scheduleType: _.get(survey, 'scheduleType'),
        status: _.get(survey, 'status'),
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
