import displayed from '../src/reducers/utils/displayedHelper';
import modal from '../src/reducers/utils/modalHelper';
import temp from '../src/reducers/utils/tempHelper';
import update from '../src/reducers/utils/updateHelper';
import teams from '../src/reducers/teamsReducer';

// all tests check redux logic

const context = 'TEST';

describe('toggle which state to use when toggling modals', () => {
  it('should go to temp when opening modal', () => {
    const displayedReducer = displayed('TEST')(context, {
      type: 'OPEN_TEST_MODAL',
      payload: 'tempTest',
    });
    const expectedReducer = 'tempTest';
    expect(displayedReducer).toEqual(expectedReducer);
  });
  it('should go to temp when closing modal', () => {
    const displayedReducer = displayed('TEST')(context, {
      type: 'CLOSE_TEST_MODAL',
      payload: 'updateTest',
    });
    const expectedReducer = 'updateTest';
    expect(displayedReducer).toEqual(expectedReducer);
  });
});
describe('modal open and close functionality', () => {
  it('should return true state on open', () => {
    const modalReducer = modal(context)(false, {
      type: 'OPEN_TEST_MODAL',
      payload: true,
    });
    const expectedReducer = true;
    expect(modalReducer).toEqual(expectedReducer);
  });
  it('should return true state on open', () => {
    const modalReducer = modal(context)(false, {
      type: 'CLOSE_TEST_MODAL',
      payload: false,
    });
    const expectedReducer = false;
    expect(modalReducer).toEqual(expectedReducer);
  });
});

describe('change state for in form values', () => {
  it('should update temporary content', () => {
    const initState = {
      one: 1,
      two: 2,
    };
    const tempReducer = temp(context, initState)(initState, {
      type: 'UPDATE_TEMP_TEST',
      payload: { three: 3, two: 4 },
    });
    const expectedReducer = {
      one: 1,
      two: 4,
      three: 3,
    };
    expect(tempReducer).toEqual(expectedReducer);
  });
  it('should update temporary content', () => {
    const initState = {
      one: 1,
      two: 2,
    };
    const tempReducer = temp(context, initState)(initState, {
      type: 'UPDATE_TEMP_TEST',
      payload: { three: 3, two: 4 },
    });
    const expectedReducer = {
      one: 1,
      two: 4,
      three: 3,
    };
    expect(tempReducer).toEqual(expectedReducer);
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
  it('should populate array', () => {
    const initState = {
      default: 'None Added',
      displayedTeams: [],
    };
    const actualArray = teams(initState, {
      type: 'UPDATE_TEAMS',
      payload: { displayedTeams: [5] },
    }).updateTeams.displayedTeams;
    const expectedArray = [5];
    expect(actualArray).toEqual(expectedArray);
  });
  it('should only replace filled slots', () => {
    const initState = {
      default: 'None Added',
      displayedTeams: [0, 1, 2, 3],
    };
    const actualArray = teams(initState, {
      type: 'UPDATE_TEAMS',
      payload: { displayedTeams: [3] },
    }).updateTeams.displayedTeams;
    const expectedArray = [3];
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
