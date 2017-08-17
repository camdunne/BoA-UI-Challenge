import React from 'react';
import { connect } from 'react-redux';
import TeamsForm from '../components/TeamsForm';
import { addInputLength, negInputLength, updateTeams } from '../actions/teamsActions';

const TeamsFormContainer = props => (
  <TeamsForm
    addInputLength={props.onAddInputLength}
    negInputLength={props.onNegInputLength}
    inputLength={props.inputLength}
    teams={props.teams}
    onSubmit={props.onUpdateTeams}
  />
);

const mapStateToProps = ({ teams }) => ({
  ...teams,
});

const mapDispatchToProps = dispatch => ({
  onAddInputLength() {
    dispatch(addInputLength());
  },
  onNegInputLength() {
    dispatch(negInputLength());
  },
  onUpdateTeams(params) {
    dispatch(updateTeams(params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamsFormContainer);
