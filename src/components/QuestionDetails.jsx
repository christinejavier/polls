import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import ChoicesList from './ChoicesList';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

const Transition = props => {
    return <Slide direction="up" {...props} />;
}

class QuestionsDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedChoice: {},
    };

    this.handleChoiceSelection = this.handleChoiceSelection.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChoiceSelection(choice) {
    this.setState({ selectedChoice: choice });
  }

  handleSave() {
    const {
      handleClose,
      handleSave,
    } = this.props;
    const {
      selectedChoice
    } = this.state;

    handleSave(selectedChoice.url);
    handleClose();
  }

  render() {
    const {
      classes,
      handleClose,
      questionDetails,
      shouldOpen,
    } = this.props;

    return (
      <Dialog
        fullScreen
        open={shouldOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              Questions Details
            </Typography>
            {
              <Button color="inherit" onClick={this.handleSave}>
                Save
              </Button>
            }
          </Toolbar>
        </AppBar>
        { questionDetails.choices && 
          <ChoicesList
            handleChoiceSelection={this.handleChoiceSelection}
            choices={questionDetails.choices}
          />
        }
      </Dialog>
    );
  }
}

export default withStyles(styles)(QuestionsDetails);
