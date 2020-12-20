import firebase from "../../config/Firebase";

const db = firebase.firestore().collection("notifications");

export const fetchNotifications = () => {
  return (dispatch, getState) => {
    let notifications = [];
    db.onSnapshot(snap => {
      snap.forEach(doc => {
        notifications.push(doc.data());
      });

      dispatch({ type: "FETCH_NOTIFICATIONS", notifications });
    });
  };
};

export const createNotification = notification => {
  return (dispatch, getState) => {
    let timeID = Date.now();
    let dataNotification = {
      date: timeID,
      text: notification.text,
      title: notification.title,
    };

    db.doc(`${timeID}`)
      .set(dataNotification)
      .then(() => {})
      .catch(err => console.log("Failed to create notification", err));

    dispatch({ type: "CREATE_NOTIFICATION", dataNotification });
  };
};

export const deleteNotification = id => {
  return (dispatch, getState) => {
    db.doc(`${id}`).delete();
    dispatch({ type: "DELETE_NOTIFICATION", id });
  };
};
