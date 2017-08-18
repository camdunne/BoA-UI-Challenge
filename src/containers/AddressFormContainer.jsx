import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddressForm from '../components/AddressForm';
import { updateAddress, updateTempAddress, resetTempAddress } from '../actions/addressActions';

{ /* Container for AddressForm component, with its redux logic */ }

const AddressFormContainer = (props) => {
  const handleClick = () => { props.onUpdateAddress(props.tempAddress); };
  return (
    <AddressForm
      address={props.tempAddress}
      updateTempAddress={props.onUpdateTempAddress}
      handleClick={handleClick}
      reset={props.onResetTempAddress}
    />
  );
};

const mapStateToProps = ({ address }) => ({
  ...address,
});
const mapDispatchToProps = dispatch => ({
  onUpdateTempAddress(params) {
    dispatch(updateTempAddress(params));
  },
  onUpdateAddress(params) {
    dispatch(updateAddress(params));
  },
  onResetTempAddress() {
    dispatch(resetTempAddress());
  },
});

AddressFormContainer.defaultProps = {
  showModal: false,
};
AddressFormContainer.propTypes = {
  tempAddress: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipcode: PropTypes.string,
  }).isRequired,
  onUpdateTempAddress: PropTypes.func.isRequired,
  onResetTempAddress: PropTypes.func.isRequired,
  onUpdateAddress: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddressFormContainer);
