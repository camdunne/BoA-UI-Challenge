import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import TeamsFormContainer from '../containers/TeamsFormContainer';

const Teams = ({ teams, showModal, onOpen, onClose }) => (
  <div>
    <h3>{'Favourite Teams'}</h3>
    <div>
      {
        (teams.length === 0) ? teams.map(team => (
          <div>
            {team.number}
            {team.name}
          </div>
        )) :
        <div>{teams.default}</div>
      }
    </div>
    <button
      type="submit"
      onClick={onOpen}
    >
      {'Edit Teams'}
    </button>

    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{'Add Teams'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TeamsFormContainer />
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  </div>
);

Teams.defaultProps = {
  showModal: false,
};
Teams.propTypes = {
  showModal: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Teams;
