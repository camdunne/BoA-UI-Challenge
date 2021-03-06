import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import TeamsFormContainer from '../containers/TeamsFormContainer';

const Teams = ({ updateTeams, currentLength, teams, showModal, onOpen, onClose, resetInput }) =>
  (
    <div>
      <div className="container">
        <div className="col-xs-4">
          <h3>{'Favourite Teams'}</h3>
          <div>
            {/* displayedTeams array is the current information of teams */}
            {
              (teams.displayedTeams.length > 0) ? teams.displayedTeams.map((teamName, i) => (
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
            onClick={() => { onOpen(updateTeams); }}
          >
            {'Update Teams'}
          </Button>
        </div>
      </div>
      {/* reset length of modal inputs to either what the length of the main array is or 3 */}
      <Modal show={showModal} onHide={() => { onClose(); resetInput(currentLength); }}>
        <Modal.Header closeButton>
          <Modal.Title>{'Add Teams'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TeamsFormContainer />
        </Modal.Body>
      </Modal>
    </div>
  )
;

Teams.defaultProps = {
  showModal: false,
  currentLength: 3,
};
Teams.propTypes = {
  updateTeams: PropTypes.shape({}).isRequired,
  currentLength: PropTypes.number,
  teams: PropTypes.shape({
    default: PropTypes.string,
    displayedNames: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  showModal: PropTypes.bool,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  resetInput: PropTypes.func.isRequired,
};

export default Teams;
