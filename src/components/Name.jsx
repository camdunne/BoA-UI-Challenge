import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import NameFormContainer from '../containers/NameFormContainer';

const Name = ({ name, showModal, onOpen, onClose }) => (
  <div>
    <h3>{'Name'}</h3>
    <div>
      <div>{name.firstname} {name.lastname}</div>
    </div>
    <button
      type="submit"
      onClick={onOpen}
    >
      {'Edit Name'}
    </button>

    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{'Edit Name'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NameFormContainer />
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  </div>
);

Name.defaultProps = {
  showModal: false,
};
Name.propTypes = {
  showModal: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Name;
