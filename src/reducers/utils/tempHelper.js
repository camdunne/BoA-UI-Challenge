// previous state to shift back to old state
export default (context, initState) => ((state = initState, action) => {
  switch (action.type) {
    case `UPDATE_TEMP_${context}`:
      // update state when adding to text field
      return { ...state, ...action.payload };
    case `UPDATE_${context}`:
      // on save, updating the temp form info,
      // saving the previous state to current state
      return { prevState: { ...state, ...action.payload }, ...action.payload, ...state };
    case `RESET_TEMP_${context}`:
    // rewind to previous state
      return { ...state.prevState, prevState: state.prevState };
    case `OPEN_${context}_MODAL`:
    // want the form state to reflect the main info
      return { ...action.payload, prevState: { ...action.payload } };
    default:
      return state;
  }
});
