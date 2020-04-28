import React, { useEffect } from 'react';
import _ from 'lodash';
import { Form, DatePicker, Button, Select, Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getSurveyTemplates, createCompanySurveySchedule } from 'store/survey';
import { Wrapper } from 'ui';
import { BasicInfoForm } from './';

const CreateTemplate = () => {
  const [form] = Form.useForm();

  const languageChange = (val) => {
    console.log(val);
  };

  const onFinish = async (fieldsValue) => {
    await form.resetFields();
  };
  return <Wrapper></Wrapper>;
};

export default CreateTemplate;
