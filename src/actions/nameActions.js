export function updateName(params) {
  return dispatch => dispatch(
    { type: 'UPDATE_NAME', payload: params });
}

export function openNameModal() {
  return dispatch => dispatch(
    { type: 'OPEN_NAME_MODAL', payload: true });
}

export function closeNameModal() {
  return dispatch => dispatch(
    { type: 'CLOSE_NAME_MODAL', payload: false });
}
