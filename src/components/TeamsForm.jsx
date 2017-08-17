import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'react-bootstrap';

const TeamsForm = ({ addInputLength, negInputLength, inputLength, handleSubmit, reset }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <center>
        {Array.from({ length: inputLength }).map((e, i) => (
          <div key={i}>
            {`Team ${i + 1} `}
            <Field
              component="input"
              name={`${i}`}
              type="text"
            />
          </div>
        ))}
        <button
          className="block link"
          onClick={addInputLength}
        >
          {'+ Add Another'}
        </button>
        {
          (inputLength > 3) ?
            <button
              className="block link"
              show={inputLength > 3}
              onClick={negInputLength}
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
        type="submit"
      >
        {'Save'}
      </Button>
    </form>
  </div>
);

export default reduxForm({
  form: 'teams',
})(TeamsForm);
