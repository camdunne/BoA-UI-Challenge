export default (context, initState) => (
  (state = initState, action) => {
    switch (action.type) {
      case `UPDATE_${context}`:
      // update main info to form info
        return { ...state, ...action.payload };
      default:
        return state;
    }
  }
);
