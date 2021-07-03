import firebase from "../../config/Firebase";

const db = firebase.firestore().collection("ebooks");
const store = firebase.storage().ref("ebooks");

export const fetchEbooks = () => {
  return (dispatch, getState) => {
    let ebooks = [];

    const setBusy = (bool) => {
      dispatch({ type: "EBOOKS_BUSY", bool });
    };

    setBusy(true);

    db.onSnapshot((snap) => {
      snap.forEach((doc) => {
        ebooks.push(doc.data());
      });

      dispatch({ type: "FETCH_EBOOKS", ebooks });
      setBusy(false);
    });
  };
};

export const createEbook = (ebook) => {
  return (dispatch, getState) => {
    let timeID = Date.now();

    const setBusy = (bool) => {
      dispatch({ type: "EBOOKS_BUSY", bool });
    };

    setBusy(true);

    //check if ebook already exhists
    for (let i = 0; i < getState().ebooks.list.length; i++) {
      if (getState().ebooks.list[i].title === ebook.file.name) {
        console.log("already exhisting: ", getState().ebooks.list[i].title);
        setBusy(false);
        alert("Ebook Already Uploaded");
        break;
      }
    }

    store
      .child(`${ebook.file.name}`)
      .put(ebook.file)
      .then((snap) => {
        snap.ref.getDownloadURL().then((url) => {
          let dataEbook = {
            date: timeID,
            title: ebook.file.name,
            url: url,
            category: ebook.category,
          };

          db.doc(`${timeID}`)
            .set(dataEbook)
            .then(() => {
              console.log("Successfully created ebook: ");
              setBusy(false);
            })
            .catch((err) => {
              console.log("Failed to create ebook: ", err);
              setBusy(false);
            });

          dispatch({ type: "CREATE_EBOOK", dataEbook });
          setBusy(false);
        });
      });
  };
};

export const deleteEbook = (id) => {
  return (dispatch, getState) => {
    db.doc(`${id}`).delete();
    dispatch({ type: "DELETE_EBOOK", id });
  };
};
