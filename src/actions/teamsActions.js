export function updateTeams(params) {
  return dispatch => dispatch(
    { type: 'UPDATE_TEAMS', payload: params });
}

export function openTeamsModal() {
  return dispatch => dispatch(
    { type: 'OPEN_TEAMS_MODAL', payload: true });
}

export function closeTeamsModal() {
  return dispatch => dispatch(
    { type: 'CLOSE_TEAMS_MODAL', payload: false });
}

export function addInputLength() {
  return dispatch => dispatch(
    { type: 'ADD_INPUT_LENGTH', payload: 1 });
}

export function negInputLength() {
  return dispatch => dispatch(
    { type: 'NEG_INPUT_LENGTH', payload: 1 });
}

export function resetInput() {
  console.log('10923rhfdiojaefoijas;diflj309r');
  return dispatch => dispatch(
    { type: 'RESET_NUM', payload: 3 });
}
