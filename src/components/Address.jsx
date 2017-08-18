import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import AddressFormContainer from '../containers/AddressFormContainer';

const Address = ({ updateAddress, address, showModal, onOpen, onClose }) => (
  <div>
    <div className="container" >
      <div className="col-xs-4">
        <h3>{'Address'}</h3>
        <div>{address.street}</div>
        <div>{address.city}, {address.state} {address.zipcode}</div>
      </div>
      <div className="col-xs-8 centerButton" >
        <Button
          bsClass="btn btn-custom"
          type="submit"
          onClick={() => { onOpen(updateAddress); }}
        >
          {'Edit Address'}
        </Button>
      </div>
    </div>
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{'Edit Address'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddressFormContainer />
      </Modal.Body>
    </Modal>
  </div>
);

Address.defaultProps = {
  showModal: false,
};
Address.propTypes = {
  updateAddress: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipcode: PropTypes.string,
  }).isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipcode: PropTypes.string,
  }).isRequired,
  showModal: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Address;
