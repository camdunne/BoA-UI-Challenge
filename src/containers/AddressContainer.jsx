import React from 'react';
import { connect } from 'react-redux';
import Address from '../components/Address';
import { openAddressModal, closeAddressModal } from '../actions/addressActions';

const AddressContainer = props => (
  <Address
    address={props.address.updateAddress}
    onOpen={props.onOpenAddressModal}
    onClose={props.onCloseAddressModal}
    showModal={props.address.showModal}
  />
);

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressContainer);
