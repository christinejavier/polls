const BASE_URL = 'https://polls.apiblueprint.org';

export const getAllQuestions = () => {
  return dispatch => {
    const getAllQuestionsEndpoint = `${BASE_URL}/questions`;

    dispatch(getAllQuestionsInProgress());
    fetch(getAllQuestionsEndpoint)
      .then(response => response.json())
      .then(questions => dispatch(getAllQuestionsSuccess(questions)))
      .catch(err => dispatch(getAllQuestionsFailure(err)));
  }
}

export const getQuestionDetails = questionURL => {
  return dispatch => {
    const getQuestionDetailsEndpoint = `${BASE_URL}${questionURL}`;

    dispatch(getQuestionDetailInProgress());
    fetch(getQuestionDetailsEndpoint)
      .then(response => response.json())
      .then(questionDetails => dispatch(getQuestionDetailSuccess(questionDetails)))
      .catch(err => dispatch(getQuestionDetailFailure(err)));
  }
}

export const postVote = choiceURL => {
  return dispatch => {
    const postVoteEndpoint = `${BASE_URL}${choiceURL}`;

    dispatch(postVoteInProgress());
    fetch(postVoteEndpoint, { method: 'POST' })
      .then(response => response.json())
      .then(() => dispatch(postVoteSuccess()))
      .catch(err => dispatch(postVoteFailure(err)));
  }
}

const getAllQuestionsInProgress = () => ({
  type: 'GET_ALL_QUESTIONS_IN_PROGRESS',
  inProgress: true,
});

const getAllQuestionsSuccess = questions => ({
  type: 'GET_ALL_QUESTIONS_SUCCESS',
  payload: questions,
  inProgress: false,
});

const getAllQuestionsFailure = err => ({
  type: 'GET_ALL_QUESTIONS_FAILURE',
  payload: err,
  inProgress: false,
});

const getQuestionDetailInProgress = () => ({
  type: 'GET_QUESTION_DETAILS_IN_PROGRESS',
  inProgress: true,
});

const getQuestionDetailSuccess = questionDetails => ({
  type: 'GET_QUESTION_DETAILS_SUCCESS',
  payload: questionDetails,
  inProgress: false,
});

const getQuestionDetailFailure = err => ({
  type: 'GET_QUESTION_DETAILS_FAILURE',
  payload: err,
  inProgress: false,
});

const postVoteInProgress = () => ({
  type: 'POST_VOTE_IN_PROGRESS',
  inProgress: true,
});

const postVoteSuccess = () => ({
  type: 'POST_VOTE_SUCCESS',
  inProgress: false,
});

const postVoteFailure = err => ({
  type: 'POST_VOTE_FAILURE',
  payload: err,
  inProgress: false,
});
