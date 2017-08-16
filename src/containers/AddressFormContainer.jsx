import React from 'react';
import { connect } from 'react-redux';
import AddressForm from '../components/AddressForm';
import * as addressActions from '../actions/addressActions';

const AddressFormContainer = props =>
  (
    <AddressForm
      address={props.address}
      onSubmit={props.updateAddress}
    />
  );


const mapStateToProps = ({ address }) => ({
  ...address,
});

export default connect(mapStateToProps, {
  ...addressActions,
})(AddressFormContainer);
