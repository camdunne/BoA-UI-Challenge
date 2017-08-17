import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Address from '../components/Address';
import { openAddressModal, closeAddressModal } from '../actions/addressActions';

const AddressContainer = (props) => {
  const address = props.address[props.address.currentDisplayed];
  return (
    <Address
      address={address}
      onOpen={props.onOpenAddressModal}
      onClose={props.onCloseAddressModal}
      showModal={props.address.showModal}
    />
  );
};


const mapStateToProps = address => ({
  ...address,
});
const mapDispatchToProps = dispatch => ({
  onOpenAddressModal() {
    dispatch(openAddressModal());
  },
  onCloseAddressModal() {
    dispatch(closeAddressModal());
  },
});

AddressContainer.propTypes = {
  address: PropTypes.shape({
    currentDisplayed: PropTypes.string,
    showModal: PropTypes.bool,
  }).isRequired,
  onOpenAddressModal: PropTypes.func.isRequired,
  onCloseAddressModal: PropTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressContainer);
