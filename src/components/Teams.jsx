import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import TeamsFormContainer from '../containers/TeamsFormContainer';

const Teams = ({ teams, showModal, onOpen, onClose, resetInput }) => (
  <div>
    <div className="container">
      <div className="col-xs-4">
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
      </div>
      <div className="col-xs-8">
        <Button
          bsClass="btn btn-custom"
          type="submit"
          onClick={onOpen}
        >
          {'Update Teams'}
        </Button>
      </div>
    </div>
    <Modal show={showModal} onHide={() => { onClose(); resetInput(); }}>
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
