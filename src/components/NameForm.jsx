import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'react-bootstrap';

const NameForm = ({ handleSubmit, reset }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        {'First Name:'}
        <Field
          component="input"
          name="firstname"
          type="text"
        />
      </div>
      <div>
        {'Last Name:'}
        <Field
          component="input"
          name="lastname"
          type="text"
        />
      </div>
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
  form: 'name',
})(NameForm);
