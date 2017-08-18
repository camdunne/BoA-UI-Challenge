import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Name from '../components/Name';
import { openNameModal, closeNameModal } from '../actions/nameActions';

{ /* Container for Name component, with its redux logic */ }

const NameContainer = (props) => {
  const name = props.name[props.name.currentDisplayed];
  return (
    <Name
      updateName={props.name.updateName}
      name={name}
      onOpen={props.onOpenNameModal}
      onClose={props.onCloseNameModal}
      showModal={props.name.showModal}
    />
  );
};
const mapStateToProps = name => ({
  ...name,
});
const mapDispatchToProps = dispatch => ({
  onOpenNameModal(param) {
    dispatch(openNameModal(param));
  },
  onCloseNameModal() {
    dispatch(closeNameModal());
  },
});

NameContainer.defaultProps = {
  showModal: false,
};
NameContainer.propTypes = {
  name: PropTypes.shape({
    showModal: PropTypes.bool,
    currentDisplayed: PropTypes.string,
    updateName: PropTypes.shape({
      firstname: PropTypes.string,
      lastname: PropTypes.string,
    }).isRequired,
  }).isRequired,
  showModal: PropTypes.bool,
  onOpenNameModal: PropTypes.func.isRequired,
  onCloseNameModal: PropTypes.func.isRequired,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NameContainer);
