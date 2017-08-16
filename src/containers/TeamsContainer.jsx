import React from 'react';
import { connect } from 'react-redux';
import Teams from '../components/Teams';
import { openTeamsModal, closeTeamsModal } from '../actions/teamsActions';

const TeamsContainer = props => (
  <Teams
    teams={props.teams.updateTeams}
    onOpen={props.openTeamsModal}
    onClose={props.closeTeamsModal}
    showModal={props.teams.showModal}
  />
);

const mapStateToProps = teams => ({
  ...teams,
});


export default connect(
  mapStateToProps,
  { openTeamsModal, closeTeamsModal },
)(TeamsContainer);
