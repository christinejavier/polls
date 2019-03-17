import React, { Component, Fragment } from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

class ChoicesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    }

    this.getPercentOfAllVotes = this.getPercentOfAllVotes.bind(this);
    this.handleChoiceSelection = this.handleChoiceSelection.bind(this);
    this.renderChoices = this.renderChoices.bind(this);
  }

  getPercentOfAllVotes(choice) {
    let numOfCurrentChoiceVotes = choice.votes;
    let numOfTotalVotes = 0;
    this.props.choices.forEach(choice => numOfTotalVotes += choice.votes);

    return ((numOfCurrentChoiceVotes/numOfTotalVotes) * 100).toFixed(2);
  }

  handleChoiceSelection(choice) {
    this.setState({ selected: true });
    this.props.handleChoiceSelection(choice);
  }

  renderChoices() {
    const {
      choices,
      handleChoiceSelection,
    } = this.props;

    return choices.map(choice => {
      return (
        <Fragment key={choice.choice}>
          <ListItem
            button
            onClick={() => handleChoiceSelection(choice)}
            selected={this.state.selected}
          >
            <ListItemText
              primary={choice.choice}
              secondary={`Votes: ${choice.votes}, ${this.getPercentOfAllVotes(choice)}% of all votes`}
            />
          </ListItem>
          <Divider/>
        </Fragment>
      )
    });
  }

  render() {
    return (
      <List>
        { this.renderChoices() }
      </List>
    );
  }
}

export default ChoicesList;
