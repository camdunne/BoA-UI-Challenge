import React from 'react';
import { connect } from 'react-redux';
import NameForm from '../components/NameForm';
import { updateName } from '../actions/nameActions';

const NameFormContainer = props =>
  (
    <NameForm
      name={props.name}
      onSubmit={props.updateName}
    />
  );


const mapStateToProps = ({ name }) => ({
  ...name,
});

export default connect(mapStateToProps, {
  updateName,
})(NameFormContainer);
