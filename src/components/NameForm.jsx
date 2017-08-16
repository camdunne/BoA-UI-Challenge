import React from 'react';
import { reduxForm, Field } from 'redux-form';

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
      <button
        onClick={reset}
      >
        {'cancel'}
      </button>
      <button
        type="submit"
      >
        {'Submit'}
      </button>
    </form>
  </div>
);

export default reduxForm({
  form: 'name',
})(NameForm);
