export default context => ((state = false, action) => {
  switch (action.type) {
    case `OPEN_${context}_MODAL`: {
      return true;
    }
    case `CLOSE_${context}_MODAL` : {
      return false;
    }
    default:
      return state;
  }
});
