import React from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { updateSurveyAnswer } from 'store/survey';
import { Select, Form } from 'antd';
import { Wrapper } from 'ui';
import { getTranslation } from 'utils';

const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayoutAns = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 },
};
const LinkAnswerForm = ({ questionNo, totalQuestions, answerData }) => {
  const dispatch = useDispatch();
  const { template } = useSelector((state) => state.survey);
  const defaultLinkAnswer = (value) => {
    const questionLength = template.questions.length;
    const getDefaultLink = questionLength === questionNo ? '' : questionNo + 1;

    return getDefaultLink;
  };
  const changeLinkAnswer = (value) => {
    const updatedAnswer = {
      ...answerData,
      next: value,
    };

    const payload = {
      question_no: questionNo,
      answer_no: answerData.answer_no,
      updatedAnswer,
    };

    dispatch(updateSurveyAnswer(payload));
  };
  const getOptions = () => {
    const options = [];
    for (let index = questionNo; index < totalQuestions; index++) {
      options.push(
        <Option key={index} value={index + 1}>{`question${index + 1}`}</Option>
      );
    }
    return options;
  };

  const { languages } = template;
  const questionLength = template.questions.length;
  const isLastLink = questionLength === questionNo;
  return (
    <Wrapper>
      {_.map(languages, (lang) => {
        return (
          <FormItem
            key={lang}
            label={`${getTranslation(lang, 'answer')} ${answerData.answer_no}`}
            {...formItemLayoutAns}
          >
            <span>{answerData.title[lang]}</span>
          </FormItem>
        );
      })}
      {!isLastLink && (
        <FormItem label='Next Question' {...formItemLayoutAns}>
          <Select
            onChange={changeLinkAnswer}
            // defaultValue={defaultLinkAnswer()}
            placeholder='Select Next Question'
            style={{ width: 200 }}
          >
            {getOptions()}
          </Select>
        </FormItem>
      )}
    </Wrapper>
  );
};

export default LinkAnswerForm;
