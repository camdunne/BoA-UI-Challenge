import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NameForm from '../components/NameForm';
import { updateName, updateTempName, resetTempName } from '../actions/nameActions';

/* Container for NameForm component, with its redux logic */

const NameFormContainer = (props) => {
  const handleClick = () => { props.onUpdateName(props.tempName); };
  return (
    <NameForm
      name={props.tempName}
      updateTempName={props.onUpdateTempName}
      handleClick={handleClick}
      reset={props.onResetTempName}
    />
  );
};

const mapStateToProps = ({ name }) => ({
  ...name,
});

const mapDispatchToProps = dispatch => ({
  onUpdateTempName(params) {
    dispatch(updateTempName(params));
  },
  onUpdateName(params) {
    dispatch(updateName(params));
  },
  onResetTempName() {
    dispatch(resetTempName());
  },
});

NameFormContainer.propTypes = {
  tempName: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  }).isRequired,
  onUpdateName: PropTypes.func.isRequired,
  onUpdateTempName: PropTypes.func.isRequired,
  onResetTempName: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NameFormContainer);
