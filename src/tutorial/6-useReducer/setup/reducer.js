export const reducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      ...state,
      people: action.payload,
      isModalOpen: true,
      modalContent: "Person added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please Enter Values",
    };
  }
  if (action.type === "REMOVE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const newList = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Person Removed",
      people: newList,
    };
  }
  throw new Error("No matching action");
};
