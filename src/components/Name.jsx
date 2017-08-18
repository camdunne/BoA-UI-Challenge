import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import NameFormContainer from '../containers/NameFormContainer';

const Name = ({ updateName, name, showModal, onOpen, onClose }) => (
  <div>
    {/* page content for Name */}
    <div className="container">
      <div className="col-xs-4">
        <h3>{'Name'}</h3>
        <div>
          <div>{name.firstname} {name.lastname}</div>
        </div>
      </div>
      <div className="col-xs-8 centerButton">
        {/* passing in current state into form */}
        <Button
          bsClass="btn btn-custom"
          type="submit"
          onClick={() => { onOpen(updateName); }}
        >
          {'Edit Name'}
        </Button>
      </div>
    </div>
    {/* modal behavior */}
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
  updateName: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  }).isRequired,
  name: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  }).isRequired,
  showModal: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Name;
