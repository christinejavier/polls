import React, { Component } from 'react';
import { isEmpty } from 'lodash';

import QuestionDetails from './QuestionDetails';
import { getQuestionDetails } from '../actions/questions'

const formatTime = time => {
  return new Date(time).toLocaleDateString();
}

class QuestionsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldOpenModal: false,
    }

    this.getListOfAllQuestions = this.getListOfAllQuestions.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.viewQuestionDetails = this.viewQuestionDetails.bind(this);
  }

  getListOfAllQuestions() {
    return this.props.questions.list.map(question => (
      <div
        key={question.url}
        className="question"
        onClick={() => this.viewQuestionDetails(question.url)}
      >
        <header className="question-header">{ question.question }</header>
        <span>Published at { formatTime(question.published_at) }</span>
        <span>Number of Choices: { question.choices.length }</span>
      </div>
      )
    );
  }

  handleModalClose() {
    this.setState({ shouldOpenModal: false });
  }

  viewQuestionDetails(questionURL) {
    this.setState({ shouldOpenModal: !this.state.shouldOpenModal });
    this.props.dispatch(getQuestionDetails(questionURL));
  }

  render() {
    const {
      dispatch,
      handleSave,
      questions,
    } = this.props;

    return (
      <div className="questions-list">
        <header>Questions</header>
        { !isEmpty(questions) && this.getListOfAllQuestions() }
        { questions.questionDetails &&
          <QuestionDetails
            dispatch={dispatch}
            handleClose={this.handleModalClose}
            handleSave={handleSave}
            questionDetails={questions.questionDetails}
            shouldOpen={this.state.shouldOpenModal}
            />
        }
      </div>
    );
  }
}

export default QuestionsList;
