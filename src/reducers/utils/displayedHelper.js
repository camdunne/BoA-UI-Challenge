export default (context) => {
  const camelCaseContext = context[0] + context.substring(1).toLowerCase();
  return ((state = `update${camelCaseContext}`, action) => {
    switch (action.type) {
      case `OPEN_${context}_MODAL`:
        return `temp${camelCaseContext}`;
      case `CLOSE_${context}_MODAL`:
        return `update${camelCaseContext}`;
      default:
        return state;
    }
  }
  );
};
