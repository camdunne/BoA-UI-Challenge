import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const TeamsForm = ({
  teams,
  addInputLength,
  negInputLength,
  inputLength,
  handleClick,
  updateTempTeams,
  reset,
}) => (
  <div>
    <form >
      <center>
        {Array.from({ length: inputLength }).map((element, i, a) => (
          <div key={a[i]}>
            {`Team ${i + 1} `}
            <input
              defaultValue={teams.displayedTeams[i]}
              onChange={(e) => {
                updateTempTeams((() => {
                  const current = [...teams.displayedTeams];
                  current[i] = e.target.value;
                  if (e.target.value === '') {
                    current.splice(i, 1);
                  }
                  return { displayedTeams: current };
                })());
              }}
              name={i}
              type="text"
            />
          </div>
        ))}
        <button
          className="block link"
          onClick={(e) => { e.preventDefault(); addInputLength(); }}
        >
          {'+ Add Another'}
        </button>
        {
          (inputLength > 3) ?
            <button
              className="block link"
              show={inputLength > 3}
              onClick={(e) => { e.preventDefault(); negInputLength(); }}
            >
              {'- Remove Field'}
            </button>
            : ''
        }
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

TeamsForm.defaultProps = {
  inputLength: 3,
};
TeamsForm.propTypes = {
  teams: PropTypes.shape({
    default: PropTypes.string,
    displayedNames: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  addInputLength: PropTypes.func.isRequired,
  negInputLength: PropTypes.func.isRequired,
  inputLength: PropTypes.number,
  handleClick: PropTypes.func.isRequired,
  updateTempTeams: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default TeamsForm;
