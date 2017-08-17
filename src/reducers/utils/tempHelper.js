export default (context, initState) => {
  let prevState = initState;
  console.log('typeof', prevState.constructor === Object, prevState);
  console.log('prevstate', prevState);
  return ((state = initState, action) => {
    switch (action.type) {
      case `UPDATE_TEMP_${context}`:
        return { ...state, ...action.payload };
      case `UPDATE_${context}`:
        if (prevState.constructor === Object) {
          prevState = { ...state };
        } else {
          prevState = state;
        }
        return state;
      case `CLOSE_${context}_MODAL`:
        return { ...prevState };
      case `RESET_TEMP_${context}`:
        return { ...prevState };
      default:
        return state;
    }
  });
};
