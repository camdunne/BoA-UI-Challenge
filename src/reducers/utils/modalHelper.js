export default context => ((state = false, action) => {
  switch (action.type) {
    case `OPEN_${context}_MODAL`: {
      return action.payload;
    }
    case `CLOSE_${context}_MODAL` : {
      return action.payload;
    }
    default:
      return state;
  }
});
