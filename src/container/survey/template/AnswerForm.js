import React, { Component } from 'react';
import _ from 'lodash';
import { Input, Form, Icon, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { updateSurveyAnswer, deleteSurveyAnswer } from 'store/survey';
import { getTranslation } from 'utils/multiLang';
import { Wrapper, Button } from 'ui';

const { confirm } = Modal;

const { TextArea } = Input;

const AnswerForm = ({ answerData, questionNo, languages }) => {
  const dispatch = useDispatch();
  const changeAnswer = (event, lang) => {
    const updatedAnswer = {
      ...answerData,
      title: {
        ...answerData.title,
        [lang]: event.target.value,
      },
    };

    const payload = {
      question_no: questionNo,
      answer_no: answerData.answer_no,
      updatedAnswer,
    };

    dispatch(updateSurveyAnswer(payload));
  };

  const DeleteSurveyAnswer = () => {
    const payload = {
      question_no: questionNo,
      answer_no: answerData.answer_no,
    };
    dispatch(deleteSurveyAnswer(payload));
  };

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure delete this Answer?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: () => {
        DeleteSurveyAnswer();
      },
    });
  };

  const getMultiLangAnswer = () => {
    return _.map(languages, (lang) => {
      return (
        <Form.Item
          key={lang}
          label={`${getTranslation(lang, 'answer')} ${answerData.answer_no}`}
          rules={[
            {
              required: true,
              message: 'answer',
            },
          ]}
        >
          <TextArea
            onChange={(event) => changeAnswer(event, lang)}
            placeholder={getTranslation(lang, 'answer_placeholder')}
            rows={1}
            value={answerData.title[lang]}
          />
        </Form.Item>
      );
    });
  };

  return (
    <Wrapper>
      <Wrapper flex justify='flex-end'>
        <Button icon={<DeleteOutlined />} danger onClick={showDeleteConfirm} />
      </Wrapper>
      {getMultiLangAnswer()}
    </Wrapper>
  );
};

export default AnswerForm;
