const managePresents = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return {numberOfPresents: state.numberOfPresents + 1};
    default:
      return state;
  }
}

export default managePresents
