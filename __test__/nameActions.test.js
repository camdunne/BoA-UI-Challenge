import * as name from '../src/actions/nameActions';

describe('name actions', () => {
  it('should create an action to update address field', () => {
    const params = { test: 'test' };
    const expectedAction = {
      type: 'UPDATE_NAME',
      payload: params,
    };
    expect(name.updateName(params)).toEqual(expectedAction);
  });
  it('should create an action to update state to true', () => {
    const payload = 'TEST';
    const expectedAction = {
      type: 'OPEN_NAME_MODAL',
      payload,
    };
    expect(name.openNameModal(payload)).toEqual(expectedAction);
  });
  it('should create an action to update state to false', () => {
    const expectedAction = {
      type: 'CLOSE_NAME_MODAL',
    };
    expect(name.closeNameModal()).toEqual(expectedAction);
  });
  it('should create an action to update state with passed in params', () => {
    const params = false;
    const expectedAction = {
      type: 'UPDATE_TEMP_NAME',
      payload: params,
    };
    expect(name.updateTempName(params)).toEqual(expectedAction);
  });
});
