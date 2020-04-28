import produce from 'immer';
import _ from 'lodash';
import { keysToCamel } from 'utils';
import * as types from './survey.types';

import uuidv4 from 'uuid/v4';

let question_no, answer_no, questions, question_index;

const initialState = {
  templates: [],
  templatesPaginator: { total: null, current: null, pageSize: null },
  companySurveys: [],
  companyForSurveys: {
    results: [],
    paginator: { total: null, current: null, pageSize: null },
  },
  defaultKey: '',
  companySurveysPaginator: { total: null, current: null, pageSize: null },
  companyForSurveysPaginator: { total: null, current: null, pageSize: null },
  template: {
    name: '',
    description: null,
    languages: [],
    questions: [],
  },
};

export const survey = (state = initialState, action) => {
  const { type, payload } = action;
  return produce(state, (draft) => {
    switch (type) {
      case types.GET_SURVEY_TEMPLATES_SUCCESS:
        draft.templates = keysToCamel(payload.results);
        draft.templatesPaginator.total = payload.paginator.total_count;
        draft.templatesPaginator.current = payload.paginator.current_page;
        draft.templatesPaginator.pageSize = payload.paginator.page_size;

        break;
      case types.GET_SURVEY_TEMPLATE_SUCCESS:
        draft.template = keysToCamel(payload);
        break;
      case types.CREATE_COMPANY_SURVEY_SCHEDULE_SUCCESS:
        draft.defaultKey = '1';
        break;
      case types.GET_COMPANIES_FOR_SURVEY_SUCCESS:
        draft.companyForSurveys.results = keysToCamel(payload.results);
        draft.companyForSurveys.paginator.total = payload.paginator.total_count;
        draft.companyForSurveys.paginator.current =
          payload.paginator.current_page;
        draft.companyForSurveys.paginator.pageSize =
          payload.paginator.page_size;
        draft.defaultKey = '';
        break;
      case types.GET_COMPANY_SURVEYS_SUCCESS:
        draft.companySurveys = keysToCamel(payload.results);
        draft.companySurveysPaginator.total = payload.paginator.total_count;
        draft.companySurveysPaginator.current = payload.paginator.current_page;
        draft.companySurveysPaginator.pageSize = payload.paginator.page_size;
        draft.defaultKey = _.isEmpty(payload.results) ? '2' : '1';
        break;
      case types.CREATE_SURVEY_TEMPLATE_SUCCESS:
        draft.template = state.template;
        break;
      case types.STORE_SURVEY_BASIC_INFO:
        draft.template.name = payload.name;
        draft.template.survey_type = payload.survey_type;
        draft.template.description = payload.description;
        draft.template.event = payload.event;
        draft.template.languages = payload.languages;
        break;
      case types.STORE_SURVEY_QUESTIONS:
        draft.template.questions = payload;
        break;
      case types.ADD_SURVEY_QUESTION:
        draft.template.questions.push(
          _getDefaultQuestion(state.template.languages)
        );
        draft.template.questions = _addQuestionNo(draft.template.questions);
        break;
      case types.UPDATE_SURVEY_QUESTIONS:
        const { updatedQuestion } = payload;
        question_index = updatedQuestion.question_no - 1;
        draft.template.questions[question_index] = updatedQuestion;

        if (updatedQuestion.answer_type === 'free_text') {
          draft.template.questions[question_index].answers = [
            _getDefaultAnswer(draft.template.languages),
          ];
        }

        draft.template.questions = _addQuestionNo(draft.template.questions);
        break;

      case types.SET_LAST_SURVEY_QUESTION:
        const totalQuestion = state.template.questions.length;
        const lastQuestionIndex = totalQuestion - 1;
        draft.template.questions[lastQuestionIndex].isLast = true;
        // draft.template = draft.template;
        break;

      case types.ADD_SURVEY_ANSWER:
        question_no = payload.question_no;
        question_index = question_no - 1;
        draft.template.questions[question_index].answers = [
          ...draft.template.questions[question_index].answers,
          _getDefaultAnswer(draft.template.languages),
        ];
        draft.template.questions[question_index].answers = _addAnswerNo(
          draft.template.questions[question_index].answers
        );

        draft.template.questions = _addQuestionNo(draft.template.questions);
        break;

      case types.UPDATE_SURVEY_ANSWER:
        const { updatedAnswer } = payload;
        if (updatedAnswer.next) {
          const next_question_no = updatedAnswer.next;
          const next_question_index = next_question_no - 1;
          const next_question_id =
            draft.template.questions[next_question_index].uuid;
          updatedAnswer.next = next_question_id;
        }

        question_no = payload.question_no;
        answer_no = updatedAnswer.answer_no;

        questions = _.map(draft.template.questions, (question) => {
          if (question.question_no === question_no) {
            question.answers = _.map(question.answers, (answer) => {
              if (answer.answer_no === answer_no) {
                return updatedAnswer;
              }

              return answer;
            });
          }

          return question;
        });
        draft.template.questions = _addQuestionNo(questions);
        break;

      case types.DELETE_SURVEY_QUESTION:
        question_no = payload.question_no;
        const remainQuestions = _.filter(
          state.template.questions,
          (question) => question.question_no !== question_no
        );

        draft.template.questions = _addQuestionNo(remainQuestions);
        break;

      case types.DELETE_SURVEY_ANSWER:
        question_no = payload.question_no;
        answer_no = payload.answer_no;
        question_index = question_no - 1;

        const remainAnswers = _.filter(
          state.template.questions[question_index].answers,
          (answer) => answer.answer_no !== answer_no
        );

        draft.template.questions[question_index].answers = _addAnswerNo(
          remainAnswers
        );

        draft.template.questions = _addQuestionNo(draft.template.questions);
        break;
      default:
        draft.template.questions = _addQuestionNo(draft.template.questions);
        break;
    }
  });
};

function _getDefaultQuestion(languages) {
  const selectedLanguages = languages.reduce((total, lng) => {
    return {
      ...total,
      [lng]: '',
    };
  }, {});

  return {
    uuid: uuidv4(),
    answer_type: 'free_text',
    question: selectedLanguages,
    answers: [],
  };
}

function _getDefaultAnswer(languages) {
  const selectedLanguages = languages.reduce((total, lng) => {
    return {
      ...total,
      [lng]: '',
    };
  }, {});

  return {
    answer_no: 1,
    title: selectedLanguages,
    next: '',
  };
}

function _addQuestionNo(questions) {
  return questions.map((question, i) => {
    return {
      ...question,
      question_no: i + 1,
    };
  });
}

function _addAnswerNo(answers) {
  return answers.map((answer, i) => {
    return {
      ...answer,
      answer_no: i + 1,
    };
  });
}
