const initialState = {
  list: [],
};

export default function devotionalsReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_DEVOTIONAL":
      let currentState1 = [...state.list];
      currentState1.push(action.dataDevotional);
      return { ...state, list: currentState1 };
    case "FETCH_DEVOTIONALS":
      return { ...state };
    case "DELETE_DEVOTIONAL":
      console.log("Devotionals Reached");
      let currentState2 = [...state.list];
      let currentState3 = currentState2.filter(item => item.date !== action.id);
      return { ...state, list: currentState3 };
    default:
      return { ...state };
  }
}
