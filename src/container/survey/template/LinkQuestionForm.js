import React from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createSurveyTemplate } from 'store/survey';
import { LinkAnswerForm } from '.';
import { Row, Col, Button, Form, Collapse } from 'antd';
import { getTranslation, answerOptions } from 'utils';
import { Title, PageHeader, Wrapper } from 'ui';

const FormItem = Form.Item;
const { Panel } = Collapse;

const QuestionPanel = ({ questionData, totalQuestions }) => {
  return (
    <Collapse
      defaultActiveKey={`${questionData.question_no}`}
      style={{ marginBottom: '16px' }}
    >
      <Panel
        header={<Title h5>Question {questionData.question_no}</Title>}
        key={questionData.question_no}
      >
        {_.map(questionData.question, (val, key) => (
          <FormItem
            key={key}
            label={getTranslation(key, 'question')}
            extra={val}
          />
        ))}
        <FormItem
          label='Answer Type'
          extra={`${answerOptions[questionData.answer_type]}`}
        />
        {_.map(questionData.answers, (answer) => (
          <LinkAnswerForm
            totalQuestions={totalQuestions}
            questionNo={questionData.question_no}
            key={answer.answer_no}
            answerData={answer}
          />
        ))}
      </Panel>
    </Collapse>
  );
};

const LinkQuestionForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { template } = useSelector((state) => state.survey);

  const createSurvey = async () => {
    function _transformSurvey(surveyData) {
      const survey = Object.assign({}, surveyData);
      delete survey.languages;
      const totalQuestions = survey.questions.length;

      let questions = survey.questions.map((question) => {
        let answers = question.answers.map((answer) => {
          const { answer_no, ...updateAnswer } = answer;
          return updateAnswer;
        });
        return { ...question, answers };
      });

      questions[totalQuestions - 1].answer_type = null;
      questions[totalQuestions - 1].answers = null;
      return { ...survey, questions };
    }
    const surveyPayload = await _transformSurvey(template);
    console.log(surveyPayload);
    await dispatch(createSurveyTemplate(surveyPayload));
    await history.push('/survey/templates');
  };

  const headerData = {
    title: 'Link Survey Question',
    buttons: [
      {
        label: 'Back',
        link: '/survey/template/questions',
      },
    ],
  };

  return (
    <>
      <PageHeader headerData={headerData} />
      <Row gutter={16} type='flex' justify='center' align='middle'>
        <Col span={12}>
          <Wrapper p={3} bg='white'>
            {template.questions.map((question) => (
              <QuestionPanel
                totalQuestions={template.questions.length}
                key={question.uuid}
                questionData={question}
              />
            ))}

            <Wrapper flex justify='flex-end' mt={2}>
              <Button type='primary' onClick={createSurvey}>
                Submit
              </Button>
            </Wrapper>
          </Wrapper>
        </Col>
      </Row>
    </>
  );
};

export default LinkQuestionForm;
