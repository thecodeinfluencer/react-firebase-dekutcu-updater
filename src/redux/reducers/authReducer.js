const initialState = {
  user: {},
  err: null,
};

export default function devotionalsReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, user: action.user, err: null };
    case "USER_LOGOUT":
      return { ...state, user: {}, err: null };
    case "USER_LOGIN_ERR":
      return { ...state, err: action.err };
    default:
      return { ...state };
  }
}
