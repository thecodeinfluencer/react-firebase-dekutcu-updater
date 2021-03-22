import React from "react";
import * as Yup from "yup";
import firebase from "../config/Firebase";
import { useHistory } from "react-router-dom";

import Form from "../components/Form";
import Button from "../components/Button";
import Input from "../components/Input";

export default function borrower() {
  let validator = Yup.object().shape({
    name: Yup.string().required().label("Full Name"),
    id: Yup.string().required().label("Book ID"),
    period: Yup.number().required().label("Borrowing Period"),
  });

  return (
    <Form
      initialValues={{}}
      validationSchema={validator}
      onSubmit={(values) => {
        // dispatch(signIn(values))
      }}
    >
      <Input name="name" placeholder="Full Name" />
      <Input name="id" placeholder="Book ID" />
      <Input name="period" placeholder="Period Borrowed" />
      {/* {state.err && (
      <p className="alert alert-danger">{state.err.message}</p>
    )} */}
      <Button style={{ alignSelf: "baseline" }} classExtra="mt-2" submit>
        Add Record
      </Button>
    </Form>
  );
}
