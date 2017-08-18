import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const NameForm = ({ name, handleClick, updateTempName, reset }) => (
  <div>
    <form>
      <center>
        {/* on change is to update form info, which is also displayed on page */}
        <div>
          {'First Name:'}
          <input
            defaultValue={name.firstname}
            onChange={(e) => { updateTempName({ firstname: e.target.value }); }}
            name="firstname"
            type="text"
          />
        </div>
        <div>
          {'Last Name:'}
          <input
            defaultValue={name.lastname}
            onChange={(e) => { updateTempName({ lastname: e.target.value }); }}
            name="lastname"
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

NameForm.propTypes = {
  name: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  updateTempName: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default NameForm;
