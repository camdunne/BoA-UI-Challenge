import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const AddressForm = ({ address, handleClick, updateTempAddress, reset }) => (
  <div>
    <form >
      <center>
        {/* on change is to update form info, which is also displayed on page */}
        <div>
          {'Street:'}
          <input
            defaultValue={address.street}
            onChange={(e) => { updateTempAddress({ street: e.target.value }); }}
            name="street"
            type="text"
          />
        </div>
        <div>
          {'City:'}
          <input
            defaultValue={address.city}
            onChange={(e) => { updateTempAddress({ city: e.target.value }); }}
            name="city"
            type="text"
          />
        </div>
        <div>
          {'State:'}
          <input
            defaultValue={address.state}
            onChange={(e) => { updateTempAddress({ state: e.target.value }); }}
            name="state"
            type="text"
          />
        </div>
        <div>
          {'Zipcode:'}
          <input
            defaultValue={address.zipcode}
            onChange={(e) => { updateTempAddress({ zipcode: e.target.value }); }}
            name="zipcode"
            type="text"
          />
        </div>
      </center>
      <Button
        bsClass="btn btn-cancel"
        onClick={reset}
      >
        {'Cancel'}
      </Button>
      <Button
        bsClass="btn btn-save"
        onClick={handleClick}
      >
        {'Save'}
      </Button>
    </form>
  </div>
);

AddressForm.defaultProps = {
  showModal: false,
};
AddressForm.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipcode: PropTypes.string,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  updateTempAddress: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default AddressForm;
