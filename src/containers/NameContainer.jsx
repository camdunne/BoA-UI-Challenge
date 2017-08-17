import React from 'react';
import { connect } from 'react-redux';
import Name from '../components/Name';
import { openNameModal, closeNameModal } from '../actions/nameActions';

const NameContainer = props => (
  <Name
    name={props.name.updateName}
    onOpen={props.onOpenNameModal}
    onClose={props.onCloseNameModal}
    showModal={props.name.showModal}
  />
);

const mapStateToProps = name => ({
  ...name,
});
const mapDispatchToProps = dispatch => ({
  onOpenNameModal() {
    dispatch(openNameModal());
  },
  onCloseNameModal() {
    dispatch(closeNameModal());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NameContainer);
