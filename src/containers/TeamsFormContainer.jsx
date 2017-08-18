import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TeamsForm from '../components/TeamsForm';
import { addInputLength, negInputLength, updateTeams, updateTempTeams, resetTempTeams } from '../actions/teamsActions';

const TeamsFormContainer = (props) => {
  const handleClick = () => { props.onUpdateTeams(props.tempTeams); };
  return (
    <TeamsForm
      addInputLength={props.onAddInputLength}
      negInputLength={props.onNegInputLength}
      inputLength={props.inputLength}
      teams={props.tempTeams}
      updateTempTeams={props.onUpdateTempTeams}
      handleClick={handleClick}
      reset={props.onResetTempTeams}
    />
  );
};

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
  onUpdateTempTeams(params) {
    dispatch(updateTempTeams(params));
  },
  onUpdateTeams(params) {
    dispatch(updateTeams(params));
  },
  onResetTempTeams() {
    dispatch(resetTempTeams());
  },
});

TeamsFormContainer.defaultProps = {
  inputLength: 3,
};
TeamsFormContainer.propTypes = {
  tempTeams: PropTypes.shape({
    default: PropTypes.string,
    displayedNames: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onAddInputLength: PropTypes.func.isRequired,
  onNegInputLength: PropTypes.func.isRequired,
  inputLength: PropTypes.number,
  onUpdateTeams: PropTypes.func.isRequired,
  onUpdateTempTeams: PropTypes.func.isRequired,
  onResetTempTeams: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TeamsFormContainer);
