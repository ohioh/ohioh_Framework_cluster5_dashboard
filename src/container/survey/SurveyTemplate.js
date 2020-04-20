import React, { useEffect } from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getSurveyTemplate } from 'store/survey';
import { Wrapper, PageHeader, Title, Text } from 'ui';

const SurveyTemplate = () => {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSurveyTemplate(param.uuid));
  }, [dispatch, param.uuid]);

  const { template } = useSelector((state) => state.survey);

  const headerData = {
    title: _.get(template, 'name'),
    buttons: [
      {
        label: 'Back',
        link: '/survey/templates',
      },
    ],
  };
  return (
    <>
      <PageHeader headerData={headerData} />
      <Wrapper p={3} bg='white'>
        {_.map(_.get(template, 'questions'), (data) => {
          return (
            <Wrapper key={data.uuid} mb={2}>
              <Title
                h6
                borderBottom='1px solid'
                borderColor='grayBg'
                pb={1}
                mb={1}
              >
                {data.question.en}
              </Title>
              {_.map(data.answers, (answer, i) => {
                return (
                  <Text key={i} inline mr={2}>
                    {' '}
                    * {answer.title.en}
                  </Text>
                );
              })}
            </Wrapper>
          );
        })}
      </Wrapper>
    </>
  );
};

export default SurveyTemplate;
