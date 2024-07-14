export const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case "addCard":
      return [
        ...state,
        {
          ...action.payload,
          id: new Date().getTime(),
        },
      ];
    case "removeCard":
      return state.filter((user) => user.id !== action.payload);

    case "updateCard":
      return state.map((u) => {
        if (u.id === action.payload.id) {
          return {
            ...action.payload,
          };
        }
        return u;
      });

    default:
      return state;
  }
};
