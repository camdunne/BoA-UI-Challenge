export function updateAddress(params) {
  return dispatch => dispatch(
    { type: 'UPDATE_ADDRESS', payload: params });
}

export function openAddressModal() {
  return dispatch => dispatch(
    { type: 'OPEN_ADDRESS_MODAL', payload: true });
}

export function closeAddressModal() {
  return dispatch => dispatch(
    { type: 'CLOSE_ADDRESS_MODAL', payload: false });
}
