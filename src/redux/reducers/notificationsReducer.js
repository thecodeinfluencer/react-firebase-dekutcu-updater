const initialState = {
  list: [],
};

export default function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_NOTIFICATION":
      let currentState1 = [...state.list];
      currentState1.push(action.dataNotification);
      return { ...state, list: currentState1 };
    case "FETCH_NOTIFICATIONS":
      return { ...state };
    case "DELETE_NOTIFICATION":
      let currentState2 = [...state.list];
      let currentState3 = currentState2.filter(item => item.date !== action.id);
      return { ...state, list: currentState3 };
    default:
      return { ...state };
  }
}
