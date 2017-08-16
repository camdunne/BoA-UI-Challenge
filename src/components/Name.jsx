import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import NameFormContainer from '../containers/NameFormContainer';

const Name = ({ name, showModal, onOpen, onClose }) => (
  <div>
    <h3>{'Name'}</h3>
    <div>
      <div>{name.firstname} {name.lastname}</div>
    </div>
    <Button
      bsStyle="primary"
      bsSize="large"
      type="submit"
      onClick={onOpen}
    >
      {'Edit Name'}
    </Button>

    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{'Edit Name'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NameFormContainer />
      </Modal.Body>
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
