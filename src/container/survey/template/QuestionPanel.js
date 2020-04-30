import React from 'react';
import _ from 'lodash';
import { Form, Input, Select, Collapse, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  updateSurveyQuestion,
  addSurveyAnswer,
  deleteSurveyQuestion,
} from 'store/survey';
import { getTranslation, answerTypeOptions } from 'utils';
import { Wrapper, Button, Title } from 'ui';
import { AnswerForm } from './';
const { TextArea } = Input;
const { Option } = Select;

const { Panel } = Collapse;
const { confirm } = Modal;

const QuestionPanel = ({ questionData, languages }) => {
  const dispatch = useDispatch();
  const { template } = useSelector((state) => state.survey);
  const changeQuestion = (event, lang) => {
    const updatedQuestion = {
      ...questionData,
      question: {
        ...questionData.question,
        [lang]: event.target.value,
      },
    };

    const payload = {
      question_no: questionData.question_no,
      updatedQuestion,
    };

    dispatch(updateSurveyQuestion(payload));
  };

  const onAnswerTypeChange = (value) => {
    const updatedQuestion = {
      ...questionData,
      answer_type: value,
    };

    const payload = {
      question_no: questionData.question_no,
      updatedQuestion,
    };

    dispatch(updateSurveyQuestion(payload));
  };

  const DeleteSurveyQuestion = () => {
    const payload = {
      question_no: questionData.question_no,
    };
    dispatch(deleteSurveyQuestion(payload));
  };

  const AddSurveyAnswer = () => {
    const payload = {
      question_no: questionData.question_no,
    };
    dispatch(addSurveyAnswer(payload));
  };

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this Question?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => {
        DeleteSurveyQuestion();
      },
    });
  };

  const getMultiLangQuestion = () => {
    return _.map(languages, (lang) => {
      return (
        <Form.Item
          key={lang}
          label={getTranslation(lang, 'question')}
          rules={[
            {
              required: true,
              message: 'Question',
            },
          ]}
        >
          <TextArea
            rows={4}
            onChange={(event) => changeQuestion(event, lang)}
            value={questionData.question[lang]}
            placeholder={getTranslation(lang, 'question_placeholder')}
          />
        </Form.Item>
      );
    });
  };

  const question = template.questions.filter((question) => {
    if (question.question_no === questionData.question_no) {
      return question.answers;
    }
  });
  const answerData = question[0].answers;

  return (
    <Collapse defaultActiveKey={['1']} style={{ marginBottom: '16px' }}>
      <Panel
        header={
          <Wrapper flex justify='space-between'>
            <Title h5>Question {questionData.question_no}</Title>
            <Button
              icon={<DeleteOutlined />}
              danger
              onClick={showDeleteConfirm}
            />
          </Wrapper>
        }
        key='1'
      >
        {getMultiLangQuestion()}
        <Form.Item label='Answer Type'>
          <Select
            value={questionData.answer_type}
            onChange={onAnswerTypeChange}
          >
            {answerTypeOptions.map((answerOption) => (
              <Option key={answerOption.value}>{answerOption.label}</Option>
            ))}
          </Select>
        </Form.Item>
        {questionData.answer_type === 'radio' && (
          <Wrapper>
            {answerData.map((answer, i) => {
              return (
                <AnswerForm
                  questionNo={questionData.question_no}
                  answerData={answer}
                  languages={languages}
                  key={i}
                />
              );
            })}
            <Button type='primary' ghost onClick={AddSurveyAnswer}>
              Add Answer
            </Button>
          </Wrapper>
        )}
      </Panel>
    </Collapse>
  );
};

export default QuestionPanel;
