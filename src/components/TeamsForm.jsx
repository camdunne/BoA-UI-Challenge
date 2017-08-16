import React from 'react';
import { reduxForm, Field } from 'redux-form';

const TeamsForm = ({ handleSubmit, reset }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        {'1:'}
        <Field
          component="input"
          name="one"
          type="text"
        />
      </div>
      <div>
        {'2:'}
        <Field
          component="input"
          name="two"
          type="text"
        />
      </div>
      <div>
        {'3:'}
        <Field
          component="input"
          name="three"
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
  form: 'teams',
})(TeamsForm);
