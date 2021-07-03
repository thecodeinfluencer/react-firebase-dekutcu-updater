import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import firebase from "../config/Firebase";
import Screen from "../layout/Screen";
import Form from "../components/Form";
import Button from "../components/Button";
import PdfUpload from "../components/PdfUpload";
import { createEbook, fetchEbooks } from "../redux/actions/ebookActions";
import { useFormikContext } from "formik";
import Input from "../components/Input";

export default function EBooks() {
  const dispatch = useDispatch();
  const formik = useFormikContext();
  const history = useHistory();
  const busy = useSelector((state) => state.ebooks.busy);
  const ebooks = useSelector((state) => state.ebooks.list).sort(
    (a, b) => b.date - a.date
  );

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        history.push("/login");
      }
    });
    dispatch(fetchEbooks());
  }, [dispatch, history]);

  const validator = Yup.object().shape({
    file: Yup.string().required().label("Ebook"),
    category: Yup.string().required().label("Category"),
  });

  return (
    <Screen>
      <div className="row">
        <div className="col-lg-6">
          <Form
            initialValues={{}}
            validationSchema={validator}
            onSubmit={(val) => {
              dispatch(createEbook(val));
              //   formik.resetForm({});
              formik.setFieldValue("file", null);
            }}
            onReset={() => {
              formik.setFieldValue("file", null);
            }}
          >
            <div className="d-flex flex-row align-items-center  my-2">
              <h5 className="h4 m-0 mt-2">Upload an Ebook</h5>
            </div>
            <div className="card p-3 mb-2">
              <Input name="category" placeholder="Book Category" />
              <PdfUpload
                name="file"
                placeholder="Choose Ebook"
                label="Choose Ebook"
              />
            </div>
            <Button disabled={busy} classExtra="mt-2" submit>
              {busy ? "Saving ..." : "Save"}
            </Button>
          </Form>
        </div>
        <div className="col-lg-6">
          <div className="d-flex flex-row align-items-center  my-2">
            <h5 className="h4 m-0 mt-2">Ebooks</h5>
          </div>
          <div
            title="ebooks"
            style={{
              // position: "fixed",
              padding: 2,
              height: window.innerHeight * 0.7,
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            {ebooks.map((ebook) => (
              <div id={ebook.name} className="card p-2 mb-2">
                <div className="row">
                  <div className="col-lg-12 my-0">
                    <div
                      className="d-flex flex-row"
                      style={{ justifyContent: "space-between" }}
                    >
                      <div>
                        <p className="lead mb-0">{ebook.title}</p>
                        <p className="text-success">
                          {ebook.category ? ebook.category : "Uncategorized"}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn-sm btn btn-warning"
                        style={{ alignSelf: "baseline" }}
                        onClick={() => window.open(ebook.url)}
                      >
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Screen>
  );
}
