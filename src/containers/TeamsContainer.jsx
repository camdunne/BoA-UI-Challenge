import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Teams from '../components/Teams';
import { openTeamsModal, closeTeamsModal, resetInput } from '../actions/teamsActions';

const TeamsContainer = (props) => {
  const teams = props.teams[props.teams.currentDisplayed];
  const currentLength = (props.teams.updateTeams.displayedTeams)
    ? props.teams.updateTeams.displayedTeams.length
    : 3;
  return (
    <Teams
      updateTeams={props.teams.updateTeams}
      currentLength={currentLength}
      teams={teams}
      onOpen={props.onOpenTeamsModal}
      onClose={props.onCloseTeamsModal}
      showModal={props.teams.showModal}
      resetInput={props.onResetInput}
    />
  );
};

const mapStateToProps = teams => ({
  ...teams,
});

const mapDispatchToProps = dispatch => ({
  onOpenTeamsModal(param) {
    dispatch(openTeamsModal(param));
  },
  onCloseTeamsModal() {
    dispatch(closeTeamsModal());
  },
  onResetInput(param) {
    dispatch(resetInput(param));
  },
});

TeamsContainer.defaultProps = {
  showModal: false,
};
TeamsContainer.propTypes = {
  teams: PropTypes.shape({
    showModal: PropTypes.bool,
    updateTeams: PropTypes.shape({
      displayedTeams: PropTypes.array,
    }),
    currentDisplayed: PropTypes.string,
  }).isRequired,
  showModal: PropTypes.bool,
  onOpenTeamsModal: PropTypes.func.isRequired,
  onCloseTeamsModal: PropTypes.func.isRequired,
  onResetInput: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamsContainer);
