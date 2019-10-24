const initialState = {
  selectedCategory: "",
  venues: [],
};

export const venueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VENUES":
      return {
        ...state,
        venues: [...action.payload],
      };
    case "SET_SELECTED_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};
