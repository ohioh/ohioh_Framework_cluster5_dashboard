import React from 'react';
import _ from 'lodash';
import { Form, Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addSurveyQuestion, setLastSurveyQuestion } from 'store/survey';
import { Wrapper, PageHeader, Button, Text } from 'ui';
import { formLayout } from 'utils';
import { QuestionPanel } from './';

const QuestionsForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const AddSurveyQuestion = () => {
    dispatch(addSurveyQuestion());
  };

  const SetLastSurveyQuestion = async () => {
    await dispatch(setLastSurveyQuestion());
    await history.push('/survey/template/questions/link');
  };

  const { template } = useSelector((state) => state.survey);

  const notEmptyQuestion = () => {
    const allQuestions = _.map(template.questions, function (questionList) {
      const emptyQuestion = Object.keys(questionList.question).every(
        (singleQuestion) => questionList.question[singleQuestion] !== ''
      );
      return emptyQuestion;
    });
    return _.every(allQuestions);
  };

  const notEmptyAnswer = () => {
    const allQuestions = _.map(template.questions, function (questionList) {
      const allAnswers = _.map(questionList.answers, function (answerList) {
        const emptyAnswer = Object.keys(answerList.title).every(
          (singleAnswer) => answerList.title[singleAnswer] !== ''
        );
        return emptyAnswer;
      });
      if (questionList.answer_type === 'free_text') {
        return true;
      } else {
        return _.every(allAnswers);
      }
    });

    return _.every(allQuestions);
  };

  const allQuestionEmptyStatus = notEmptyQuestion();
  const allAnswerEmptyStatus = notEmptyAnswer();

  const questionValidation =
    template.questions.length > 0 &&
    allQuestionEmptyStatus &&
    allAnswerEmptyStatus;

  const headerData = {
    title: 'Template questions',
    buttons: [
      {
        label: 'Back',
        link: '/survey/template/create',
      },
    ],
  };
  return (
    <>
      <PageHeader headerData={headerData} />
      <Row gutter={16} type='flex' justify='center' align='middle'>
        <Col span={12}>
          <Wrapper p={3} bg='white'>
            <Form
              form={form}
              {...formLayout}
              initialValues={{
                answer_type: 'free_text',
              }}
            >
              {template.questions.map((questionData, i) => {
                return (
                  <QuestionPanel
                    key={i}
                    languages={template.languages}
                    questionData={questionData}
                  />
                );
              })}

              <Wrapper my={2} flex justify='flex-end'>
                <Button type='primary' onClick={AddSurveyQuestion}>
                  Add Question
                </Button>
                <Button
                  disabled={!questionValidation}
                  ml={1}
                  htmlType='submit'
                  onClick={SetLastSurveyQuestion}
                >
                  Next
                </Button>
              </Wrapper>
              {!questionValidation && (
                <Text warning textAlign='center'>
                  NB: Empty Field
                </Text>
              )}
            </Form>
          </Wrapper>
        </Col>
      </Row>
    </>
  );
};

export default QuestionsForm;
