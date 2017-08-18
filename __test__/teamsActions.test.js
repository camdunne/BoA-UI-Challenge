import * as teams from '../src/actions/teamsActions';


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
    const payload = 'TEST';
    const expectedAction = {
      type: 'OPEN_TEAMS_MODAL',
      payload,
    };
    expect(teams.openTeamsModal(payload)).toEqual(expectedAction);
  });
  it('should create an action to update state to false', () => {
    const expectedAction = {
      type: 'CLOSE_TEAMS_MODAL',
    };
    expect(teams.closeTeamsModal()).toEqual(expectedAction);
  });
  it('should create an action to update state to 1', () => {
    const expectedAction = {
      type: 'ADD_INPUT_LENGTH',
    };
    expect(teams.addInputLength()).toEqual(expectedAction);
  });
  it('should create an action to update state to 1', () => {
    const expectedAction = {
      type: 'NEG_INPUT_LENGTH',
    };
    expect(teams.negInputLength()).toEqual(expectedAction);
  });
  it('should create an action to update state to 3 when param is undefined', () => {
    let payload;
    const expectedAction = {
      type: 'RESET_NUM',
      payload: 3,
    };
    expect(teams.resetInput(payload)).toEqual(expectedAction);
  });
  it('should create an action to update state to param when param is greater than 3', () => {
    const payload = 5;
    const expectedAction = {
      type: 'RESET_NUM',
      payload,
    };
    expect(teams.resetInput(payload)).toEqual(expectedAction);
  });
  it('should create an action to update state with passed in params', () => {
    const params = false;
    const expectedAction = {
      type: 'UPDATE_TEMP_TEAMS',
      payload: params,
    };
    expect(teams.updateTempTeams(params)).toEqual(expectedAction);
  });
});
