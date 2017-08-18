export function updateAddress(payload) {
  return { type: 'UPDATE_ADDRESS', payload };
}

export function openAddressModal(payload) {
  return { type: 'OPEN_ADDRESS_MODAL', payload };
}

export function closeAddressModal() {
  return { type: 'CLOSE_ADDRESS_MODAL' };
}

export function updateTempAddress(payload) {
  return { type: 'UPDATE_TEMP_ADDRESS', payload };
}

export function resetTempAddress() {
  return { type: 'RESET_TEMP_ADDRESS' };
}
