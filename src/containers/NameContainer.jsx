import React from 'react';
import { connect } from 'react-redux';
import Name from '../components/Name';
import { openNameModal, closeNameModal } from '../actions/nameActions';

const NameContainer = props => (
  <Name
    name={props.name.updateName}
    onOpen={props.openNameModal}
    onClose={props.closeNameModal}
    showModal={props.name.showModal}
  />
);

const mapStateToProps = name => ({
  ...name,
});


export default connect(
  mapStateToProps,
  { openNameModal, closeNameModal },
)(NameContainer);
