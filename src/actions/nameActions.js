export function updateName(params) {
  return { type: 'UPDATE_NAME', payload: params };
}

export function openNameModal() {
  return { type: 'OPEN_NAME_MODAL', payload: true };
}

export function closeNameModal() {
  return { type: 'CLOSE_NAME_MODAL', payload: false };
}
