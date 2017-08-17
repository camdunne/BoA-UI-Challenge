import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button } from 'react-bootstrap';

const NameForm = ({ handleSubmit, reset }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <center>
        <div>
          {'First Name:'}
          <Field
            value="Johnny"
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
  form: 'name',
})(NameForm);
