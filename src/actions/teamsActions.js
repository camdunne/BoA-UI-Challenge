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
