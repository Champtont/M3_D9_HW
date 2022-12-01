const initialState = {
  favorites: {
    companies: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAV":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          companies: [...state.favorites.companies, action.payload],
        },
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          companies: state.favorites.companies.filter((favorite) => {
            return favorite._id !== action.payload;
          }),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
