import React from 'react';
import { connect } from 'react-redux';
import TeamsForm from '../components/TeamsForm';
import * as teamsActions from '../actions/teamsActions';

const TeamsFormContainer = props => (
  <TeamsForm
    addInputLength={props.addInputLength}
    negInputLength={props.negInputLength}
    inputLength={props.inputLength}
    teams={props.teams}
    onSubmit={props.updateTeams}
  />
);

const mapStateToProps = ({ teams }) => ({
  ...teams,
});

export default connect(mapStateToProps, {
  ...teamsActions,
})(TeamsFormContainer);
