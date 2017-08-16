import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import AddressFormContainer from '../containers/AddressFormContainer';

const Address = ({ address, showModal, onOpen, onClose }) => (
  <div>
    <h3>{'Address'}</h3>
    <div>
      <div>{address.street}</div>
      <div>{address.city}, {address.state} {address.zipcode}</div>
    </div>
    <button
      type="submit"
      onClick={onOpen}
    >
      {'Edit Address'}
    </button>

    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{'Edit Address'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddressFormContainer />
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  </div>
);

Address.defaultProps = {
  showModal: false,
};
Address.propTypes = {
  showModal: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Address;
