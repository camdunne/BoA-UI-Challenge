import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import TeamsFormContainer from '../containers/TeamsFormContainer';

const Teams = ({ teams, showModal, onOpen, onClose }) => (
  <div>
    <h3>{'Favourite Teams'}</h3>
    <div>
      {
        (teams.array.length > 0) ? teams.array.map((teamName, i) => (
          <div key={i}>
            {i + 1}{': '}{teamName}
          </div>
        )) : <div>{teams.default}</div>
      }
    </div>
    <Button
      bsStyle="primary"
      bsSize="large"
      type="submit"
      onClick={onOpen}
    >
      Edit Teams
    </Button>

    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{'Add Teams'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TeamsFormContainer />
      </Modal.Body>

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
