import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'react-bootstrap';

const TeamsForm = ({ addInputLength, negInputLength, inputNumber, handleSubmit, reset }) => (
  <div>
    <form onSubmit={handleSubmit}>
      {Array.from({ length: inputNumber }).map((e, i) => (
        <div key={i}>
          {`Team ${i + 1} `}
          <Field
            component="input"
            name={`${i}`}
            type="text"
          />
        </div>
      ))}
      <Button
        onClick={addInputLength}
      >
        {'+ Add Another'}
      </Button>
      {
        (inputNumber > 3) ?
          <Button
            show={inputNumber > 3}
            onClick={negInputLength}
          >
            {'- Remove Field'}
          </Button>
          : ''
      }
      <Button
        bsStyle="primary"
        bsSize="large"
        onClick={reset}
      >
        {'cancel'}
      </Button>
      <Button
        bsStyle="primary"
        bsSize="large"
        type="submit"
      >
        {'Submit'}
      </Button>
    </form>
  </div>
);

export default reduxForm({
  form: 'teams',
})(TeamsForm);
