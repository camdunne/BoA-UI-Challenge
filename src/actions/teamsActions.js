export function updateTeams(params) {
  return { type: 'UPDATE_TEAMS', payload: params };
}

export function openTeamsModal() {
  return { type: 'OPEN_TEAMS_MODAL', payload: true };
}

export function closeTeamsModal() {
  return { type: 'CLOSE_TEAMS_MODAL', payload: false };
}

export function addInputLength() {
  return { type: 'ADD_INPUT_LENGTH', payload: 1 };
}

export function negInputLength() {
  return { type: 'NEG_INPUT_LENGTH', payload: 1 };
}

export function resetInput() {
  return { type: 'RESET_NUM', payload: 3 };
}
