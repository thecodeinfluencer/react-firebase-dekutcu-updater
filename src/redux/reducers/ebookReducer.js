const initialState = {
  list: [],
  busy: false,
};

export default function ebooksReducer(state = initialState, action) {
  switch (action.type) {
    case "EBOOKS_BUSY":
      return { ...state, busy: action.bool };
    case "CREATE_EBOOK":
      let currentState1 = [...state.list];
      currentState1.push(action.dataEbook);
      return { ...state, list: currentState1, busy: false };
    case "FETCH_EBOOKS":
      return { ...state, list: action.ebooks, busy: false };
    case "DELETE_EBOOK":
      let currentState2 = [...state.list];
      let currentState3 = currentState2.filter(
        (item) => item.date !== action.id
      );
      return { ...state, list: currentState3, busy: false };
    default:
      return { ...state };
  }
}
