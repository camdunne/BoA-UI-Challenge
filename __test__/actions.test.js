import * as address from '../src/actions/addressActions';
import * as name from '../src/actions/nameActions';
import * as teams from '../src/actions/teamsActions';

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
    const expectedAction = {
      type: 'OPEN_ADDRESS_MODAL',
      payload: true,
    };
    expect(address.openAddressModal()).toEqual(expectedAction);
  });
  it('should create an action to update state to false', () => {
    const expectedAction = {
      type: 'CLOSE_ADDRESS_MODAL',
      payload: false,
    };
    expect(address.closeAddressModal()).toEqual(expectedAction);
  });
});

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
    const expectedAction = {
      type: 'OPEN_NAME_MODAL',
      payload: true,
    };
    expect(name.openNameModal()).toEqual(expectedAction);
  });
  it('should create an action to update state to false', () => {
    const expectedAction = {
      type: 'CLOSE_NAME_MODAL',
      payload: false,
    };
    expect(name.closeNameModal()).toEqual(expectedAction);
  });
});

describe('teams actions', () => {
  it('should create an action to update address field', () => {
    const params = { test: 'test' };
    const expectedAction = {
      type: 'UPDATE_TEAMS',
      payload: params,
    };
    expect(teams.updateTeams(params)).toEqual(expectedAction);
  });
  it('should create an action to update state to true', () => {
    const expectedAction = {
      type: 'OPEN_TEAMS_MODAL',
      payload: true,
    };
    expect(teams.openTeamsModal()).toEqual(expectedAction);
  });
  it('should create an action to update state to false', () => {
    const expectedAction = {
      type: 'CLOSE_TEAMS_MODAL',
      payload: false,
    };
    expect(teams.closeTeamsModal()).toEqual(expectedAction);
  });
  it('should create an action to update state to 1', () => {
    const expectedAction = {
      type: 'ADD_INPUT_LENGTH',
      payload: 1,
    };
    expect(teams.addInputLength()).toEqual(expectedAction);
  });
  it('should create an action to update state to 1', () => {
    const expectedAction = {
      type: 'NEG_INPUT_LENGTH',
      payload: 1,
    };
    expect(teams.negInputLength()).toEqual(expectedAction);
  });
});
