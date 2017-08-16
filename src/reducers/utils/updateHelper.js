export default (context, initState) => (
  (state = initState, action) => {
    switch (action.type) {
      case `UPDATE_${context}`:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  }
);
