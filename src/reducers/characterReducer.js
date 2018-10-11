function characterReducer(state, action) {
  if (state === undefined) {
    console.log("Reducer initialized");
    return {
      newClass: "",
      race: ""
    };
  }
  switch (action.type) {
    case "UPDATE_CLASS":
      console.log("Update class action");
      return {
        ...state.newClass,
        newClass: action.newClass
      };
    case "UPDATE_RACE":
      console.log("Update race action");
      return {
        ...state.race,
        race: action.race
      };
  }
}

export default characterReducer;
