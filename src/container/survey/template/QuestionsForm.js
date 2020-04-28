import React from 'react';
import { Form } from 'antd';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Wrapper, PageHeader, Button } from 'ui';
import { formLayout } from 'utils';
import { QuestionPanel } from './';

const QuestionsForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = async (values) => {
    history.push('/survey/template/questions');
  };

  const headerData = {
    title: 'Template questions',
  };
  return (
    <>
      <PageHeader headerData={headerData} />
      <Wrapper p={3} bg='white'>
        <Form form={form} onFinish={onFinish} {...formLayout}>
          <QuestionPanel />
          <Form.Item>
            <Wrapper mt={2} flex justify='flex-end'>
              <Button type='primary'>Add Question</Button>
              <Button ml={1} htmlType='submit'>
                Next
              </Button>
            </Wrapper>
          </Form.Item>
        </Form>
      </Wrapper>
    </>
  );
};

export default QuestionsForm;
