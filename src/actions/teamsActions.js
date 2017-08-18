export function updateTeams(payload) {
  return { type: 'UPDATE_TEAMS', payload };
}

export function openTeamsModal(payload) {
  return { type: 'OPEN_TEAMS_MODAL', payload };
}

export function closeTeamsModal() {
  return { type: 'CLOSE_TEAMS_MODAL' };
}

export function addInputLength() {
  return { type: 'ADD_INPUT_LENGTH' };
}

export function negInputLength() {
  return { type: 'NEG_INPUT_LENGTH' };
}

export function resetInput(param) {
  const payload = (Number(param) > 3) ? param : 3;
  return { type: 'RESET_NUM', payload };
}

export function updateTempTeams(payload) {
  return { type: 'UPDATE_TEMP_TEAMS', payload };
}

export function resetTempTeams() {
  return { type: 'RESET_TEMP_TEAMS' };
}
