import modal from '../src/reducers/utils/modalHelper';
import update from '../src/reducers/utils/updateHelper';
import teams from '../src/reducers/teamsReducer';

const context = 'TEST';

describe('modal open and close functionality', () => {
  it('should return true state on open', () => {
    const modalReducer = modal('TEST')(false, {
      type: 'OPEN_TEST_MODAL',
      payload: true,
    });
    const expectedReducer = true;
    expect(modalReducer).toEqual(expectedReducer);
  });
  it('should return true state on open', () => {
    const context = 'TEST';
    const modalReducer = modal('TEST')(false, {
      type: 'CLOSE_TEST_MODAL',
      payload: false,
    });
    const expectedReducer = false;
    expect(modalReducer).toEqual(expectedReducer);
  });
});

describe('update forms', () => {
  it('should update if filled out textbox', () => {
    const initState = {
      one: 1,
      two: 2,
    };
    const updateReducer = update(context)(initState, {
      type: 'UPDATE_TEST',
      payload: {
        two: 'fish',
      },
    });
    const expectedReducer = {
      one: 1,
      two: 'fish',
    };
    expect(updateReducer).toEqual(expectedReducer);
  });
});

describe('update team form', () => {
  it('should only replace filled slots', () => {
    const initState = { array: [0, 1, 2, 3] };
    console.log(teams);
    const actualArray = teams(initState, {
      type: 'UPDATE_TEAMS',
      payload: [5],
    }).updateTeams.array;
    const expectedArray = [5, 1, 2, 3];
    expect(actualArray).toEqual(expectedArray);
  });
});

describe('update form input length', () => {
  it('should not go lower than 3', () => {
    const initState = 3;
    const actualState = teams(initState, {
      type: 'NEG_INPUT_LENGTH',
      payload: 1,
    }).inputLength;
    const expectedState = 3;
    expect(actualState).toEqual(expectedState);
  });
  it('should add an input', () => {
    const initState = 3;
    const actualState = teams(initState, {
      type: 'ADD_INPUT_LENGTH',
      payload: 1,
    }).inputLength;
    const expectedState = 4;
    expect(actualState).toEqual(expectedState);
  });
  it('should eliminate an input', () => {
    const initState = 4;
    const actualState = teams(initState, {
      type: 'NEG_INPUT_LENGTH',
      payload: 1,
    }).inputLength;
    const expectedState = 3;
    expect(actualState).toEqual(expectedState);
  });
  it('should be able to reset form to original state', () => {
    const initState = 10;
    const actualState = teams(initState, {
      type: 'RESET_NUM',
      payload: 3,
    }).inputLength;
    const expectedState = 3;
    expect(actualState).toEqual(expectedState);
  });
});
