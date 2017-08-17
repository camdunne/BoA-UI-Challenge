import React from 'react';
import { connect } from 'react-redux';
import NameForm from '../components/NameForm';
import { updateName } from '../actions/nameActions';

const NameFormContainer = props => (
  <NameForm
    name={props.name}
    onSubmit={props.onUpdateName}
  />
);


const mapStateToProps = ({ name }) => ({
  ...name,
});

const mapDispatchToProps = dispatch => ({
  onUpdateName(params) {
    dispatch(updateName(params));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NameFormContainer);
