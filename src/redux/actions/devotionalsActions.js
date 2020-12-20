import firebase from "../../config/Firebase";

const db = firebase.firestore().collection("devotionals");

export const fetchDevotionals = () => {
  return (dispatch, getState) => {
    let devotionals = [];
    db.onSnapshot(snap => {
      snap.forEach(doc => {
        devotionals.push(doc.data());
      });
    });
    dispatch({ type: "FETCH_DEVOTIONALS", devotionals });
  };
};

export const createDevotional = devotional => {
  return (dispatch, getState) => {
    let timeID = Date.now();
    let dataDevotional = {
      date: timeID,
      text: devotional.text,
    };

    db.doc(`${timeID}`)
      .set(dataDevotional)
      .then(() => {})
      .catch(err => console.log("Failed to create devotional", err));

    dispatch({ type: "CREATE_DEVOTIONAL", dataDevotional });
  };
};

export const deleteDevotional = id => {
  return (dispatch, getState) => {
    db.doc(`${id}`).delete();
    dispatch({ type: "DELETE_DEVOTIONAL", id });
  };
};
