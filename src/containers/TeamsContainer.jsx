import React from 'react';
import { connect } from 'react-redux';
import Teams from '../components/Teams';
import { openTeamsModal, closeTeamsModal, resetInput } from '../actions/teamsActions';

const TeamsContainer = props => (
  <Teams
    teams={props.teams.updateTeams}
    onOpen={props.onOpenTeamsModal}
    onClose={props.onCloseTeamsModal}
    showModal={props.teams.showModal}
    resetInput={props.onResetInput}
  />
);

const mapStateToProps = teams => ({
  ...teams,
});

const mapDispatchToProps = dispatch => ({
  onOpenTeamsModal() {
    dispatch(openTeamsModal());
  },
  onCloseTeamsModal() {
    dispatch(closeTeamsModal());
  },
  onResetInput() {
    dispatch(resetInput());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamsContainer);
