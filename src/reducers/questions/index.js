export default (state = {}, action) => {
    switch (action.type) {
      case 'GET_ALL_QUESTIONS_SUCCESS':
        return {
          ...state,
          list: [...action.payload],
        };
      case 'GET_QUESTION_DETAILS_SUCCESS':
        return {
          ...state,
          questionDetails: {
            ...action.payload,
          },
        };
      case 'GET_ALL_QUESTIONS_FAILURE':
      case 'GET_QUESTION_DETAILS_FAILURE':
      case 'POST_VOTE_FAILURE':
        return {
          ...state,
          ...action.payload
        };
      case 'POST_VOTE_SUCCESS':
      default:
        return state;
    }
  }
  