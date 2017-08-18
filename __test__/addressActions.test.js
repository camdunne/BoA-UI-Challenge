import * as address from '../src/actions/addressActions';

describe('address actions', () => {
  it('should create an action to update address field', () => {
    const params = { test: 'test' };
    const expectedAction = {
      type: 'UPDATE_ADDRESS',
      payload: params,
    };
    expect(address.updateAddress(params)).toEqual(expectedAction);
  });
  it('should create an action to update state to true', () => {
    const payload = 'TEST';
    const expectedAction = {
      type: 'OPEN_ADDRESS_MODAL',
      payload,
    };
    expect(address.openAddressModal(payload)).toEqual(expectedAction);
  });
  it('should create an action to update state to false', () => {
    const expectedAction = {
      type: 'CLOSE_ADDRESS_MODAL',
    };
    expect(address.closeAddressModal()).toEqual(expectedAction);
  });
  it('should create an action to update state with passed in params', () => {
    const params = false;
    const expectedAction = {
      type: 'UPDATE_TEMP_ADDRESS',
      payload: params,
    };
    expect(address.updateTempAddress(params)).toEqual(expectedAction);
  });
});
