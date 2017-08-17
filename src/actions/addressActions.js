export function updateAddress(params) {
  return { type: 'UPDATE_ADDRESS', payload: params };
}

export function openAddressModal() {
  return { type: 'OPEN_ADDRESS_MODAL', payload: true };
}

export function closeAddressModal() {
  return { type: 'CLOSE_ADDRESS_MODAL', payload: false };
}
