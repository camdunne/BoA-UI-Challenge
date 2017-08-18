import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Address from '../components/Address';
import { openAddressModal, closeAddressModal } from '../actions/addressActions';

const AddressContainer = (props) => {
  const address = props.address[props.address.currentDisplayed];
  return (
    <Address
      updateAddress={props.address.updateAddress}
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
  onOpenAddressModal(param) {
    dispatch(openAddressModal(param));
  },
  onCloseAddressModal() {
    dispatch(closeAddressModal());
  },
});

AddressContainer.propTypes = {
  address: PropTypes.shape({
    currentDisplayed: PropTypes.string,
    showModal: PropTypes.bool,
    updateAddress: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      zipcode: PropTypes.string,
    }).isRequired,
  }).isRequired,
  onOpenAddressModal: PropTypes.func.isRequired,
  onCloseAddressModal: PropTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressContainer);
