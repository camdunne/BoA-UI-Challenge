import React from 'react';
import { connect } from 'react-redux';
import Address from '../components/Address';
import { openAddressModal, closeAddressModal } from '../actions/addressActions';

const AddressContainer = props => (
  <Address
    address={props.address.updateAddress}
    onOpen={props.openAddressModal}
    onClose={props.closeAddressModal}
    showModal={props.address.showModal}
  />
);

const mapStateToProps = address => ({
  ...address,
});


export default connect(
  mapStateToProps,
  { openAddressModal, closeAddressModal },
)(AddressContainer);
