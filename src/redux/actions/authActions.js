import firebase from "../../config/Firebase";

const auth = firebase.auth();

export const signIn = (creds) => {
  const { email, password } = creds;
  return (dispatch, getState) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => dispatch({ type: "USER_LOGIN", user }))
      .catch((err) => dispatch({ type: "USER_LOGIN_ERR", err }));
  };
};
