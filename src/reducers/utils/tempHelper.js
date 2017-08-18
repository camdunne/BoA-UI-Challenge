export default (context, initState) => ((state = initState, action) => {
  switch (action.type) {
    case `UPDATE_TEMP_${context}`:
      return { ...state, ...action.payload };
    case `UPDATE_${context}`:
      return { prevState: { ...state, ...action.payload }, ...action.payload, ...state };
    case `RESET_TEMP_${context}`:
      return { ...state.prevState, prevState: state.prevState };
    case `OPEN_${context}_MODAL`:
      return { ...action.payload };
    default:
      return state;
  }
});
