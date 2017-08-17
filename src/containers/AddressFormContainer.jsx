import React from 'react';
import { connect } from 'react-redux';
import AddressForm from '../components/AddressForm';
import { updateAddress } from '../actions/addressActions';

const AddressFormContainer = props => (
  <AddressForm
    address={props.updateAddress}
    onSubmit={props.onUpdateAddress}
  />
);


const mapStateToProps = ({ address }) => ({
  ...address,
});
const mapDispatchToProps = dispatch => ({
  onUpdateAddress(params) {
    dispatch(updateAddress(params));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressFormContainer);
