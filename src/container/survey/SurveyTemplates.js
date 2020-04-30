import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getSurveyTemplates } from 'store/survey';
import { parseDate } from 'utils';
import { useQueryParams } from 'hooks';
import { Wrapper, PageHeader } from 'ui';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
];

const SurveyTemplates = () => {
  const dispatch = useDispatch();
  const { handleQueryParams } = useQueryParams();

  useEffect(() => {
    dispatch(getSurveyTemplates());
  }, [dispatch]);

  const { templates, templatesPaginator } = useSelector(
    (state) => state.survey
  );

  const renderSurveyTemplates = () => {
    return _.map(templates, (template) => {
      return {
        key: template.uuid,
        name: (
          <Link to={`/survey/templates/${template.uuid}`}>{template.name}</Link>
        ),
        description: template.description,
        createdAt: parseDate(template.createdAt),
      };
    });
  };

  const handlePagination = (paginator) => {
    handleQueryParams({ page: paginator.current });
  };

  const headerData = {
    title: 'Survey Templates',
    buttons: [
      {
        label: 'Create Template',
        link: '/survey/template/create',
      },
    ],
  };
  return (
    <>
      <PageHeader headerData={headerData} />
      <Wrapper p={3} bg='white'>
        <Table
          columns={columns}
          dataSource={renderSurveyTemplates()}
          pagination={templatesPaginator}
          onChange={(paginator) => {
            handlePagination(paginator);
          }}
        />
      </Wrapper>
    </>
  );
};

export default SurveyTemplates;
