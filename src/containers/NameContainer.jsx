import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Name from '../components/Name';
import { openNameModal, closeNameModal } from '../actions/nameActions';

const NameContainer = (props) => {
  const name = props.name[props.name.currentDisplayed];
  return (
    <Name
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
  onOpenNameModal() {
    dispatch(openNameModal());
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
  }).isRequired,
  showModal: PropTypes.bool,
  onOpenNameModal: PropTypes.func.isRequired,
  onCloseNameModal: PropTypes.func.isRequired,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NameContainer);
