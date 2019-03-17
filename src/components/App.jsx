import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuestionsList from './QuestionsList';
import { getAllQuestions, postVote } from '../actions/questions';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidMount() {
    this.props.getAllQuestions();
  }

  handleSave(selectedChoiceUrl) {
    this.props.dispatch(postVote(selectedChoiceUrl));
  }

  render() {
    const {
      dispatch,
      questions,
    } = this.props;

    return (
      <div className="App">
        <QuestionsList
          dispatch={dispatch}
          handleSave={this.handleSave}
          questions={questions}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({
  getAllQuestions: () => dispatch(getAllQuestions()),
  dispatch: dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
