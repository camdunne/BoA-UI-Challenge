export function updateName(payload) {
  return { type: 'UPDATE_NAME', payload };
}

export function openNameModal(payload) {
  return { type: 'OPEN_NAME_MODAL', payload };
}

export function closeNameModal() {
  return { type: 'CLOSE_NAME_MODAL' };
}

export function updateTempName(payload) {
  return { type: 'UPDATE_TEMP_NAME', payload };
}

export function resetTempName() {
  return { type: 'RESET_TEMP_NAME' };
}
