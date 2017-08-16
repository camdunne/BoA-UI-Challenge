import React from 'react';
import { reduxForm, Field } from 'redux-form';

const AddressForm = ({ handleSubmit, reset }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        {'Street:'}
        <Field
          component="input"
          name="street"
          type="text"
        />
      </div>
      <div>
        {'City:'}
        <Field
          component="input"
          name="city"
          type="text"
        />
      </div>
      <div>
        {'State:'}
        <Field
          component="input"
          name="state"
          type="text"
        />
      </div>
      <div>
        {'Zipcode:'}
        <Field
          component="input"
          name="zipcode"
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
  form: 'address',
})(AddressForm);
